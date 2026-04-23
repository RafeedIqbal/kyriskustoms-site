"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import { BOOKING_CONTENT } from "@/app/_content/site-content";

import styles from "./booking-page.module.css";

type BookingFormState = {
  firstName: string;
  lastName: string;
  email: string;
  note: string;
};

const MONTH = 3;
const YEAR = 2026;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_IN_MONTH = new Date(YEAR, MONTH + 1, 0).getDate();
const MONTH_OFFSET = new Date(YEAR, MONTH, 1).getDay();

export function BookingPage() {
  const defaultDate = BOOKING_CONTENT.availability[0];
  const [selectedPurpose, setSelectedPurpose] = useState(
    BOOKING_CONTENT.options[0].title,
  );
  const [selectedDate, setSelectedDate] = useState(defaultDate.isoDate);
  const [selectedTime, setSelectedTime] = useState(defaultDate.times[0]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formState, setFormState] = useState<BookingFormState>({
    firstName: "",
    lastName: "",
    email: "",
    note: "",
  });

  const selectedDateData =
    BOOKING_CONTENT.availability.find((slot) => slot.isoDate === selectedDate) ??
    defaultDate;

  const availabilityMap = new Map(
    BOOKING_CONTENT.availability.map((slot) => {
      const day = Number(slot.isoDate.split("-")[2]);
      return [day, slot] as const;
    }),
  );

  const calendarCells = [
    ...Array.from({ length: MONTH_OFFSET }, (_, index) => ({
      key: `blank-${index}`,
      kind: "blank" as const,
    })),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, index) => {
      const day = index + 1;
      return {
        key: `day-${day}`,
        kind: "day" as const,
        day,
        availability: availabilityMap.get(day),
      };
    }),
  ];

  const fullName = [formState.firstName, formState.lastName]
    .filter(Boolean)
    .join(" ");

  const stepState = [
    Boolean(selectedPurpose),
    Boolean(selectedDate),
    Boolean(selectedTime),
    Boolean(formState.firstName || formState.email),
  ];

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setIsConfirmed(false);
    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleDateSelect(isoDate: string) {
    const nextDate =
      BOOKING_CONTENT.availability.find((slot) => slot.isoDate === isoDate) ??
      defaultDate;

    setSelectedDate(isoDate);
    setSelectedTime(nextDate.times[0]);
    setIsConfirmed(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsConfirmed(true);
  }

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.label}>{BOOKING_CONTENT.label}</p>
            <h1 className={styles.title}>
              {BOOKING_CONTENT.title} <em>{BOOKING_CONTENT.emphasis}</em>
            </h1>
          </div>
          <p className={styles.description}>{BOOKING_CONTENT.description}</p>
        </div>

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.steps} aria-hidden="true">
              {[
                "01 · Purpose",
                "02 · Date",
                "03 · Time",
                "04 · Details",
              ].map((label, index) => (
                <span
                  key={label}
                  className={stepState[index] ? styles.stepActive : ""}
                >
                  {label}
                </span>
              ))}
            </div>

            <fieldset className={styles.fieldset}>
              <legend>What brings you in?</legend>
              <div className={styles.optionGrid}>
                {BOOKING_CONTENT.options.map((option) => (
                  <button
                    key={option.title}
                    type="button"
                    className={[
                      styles.option,
                      selectedPurpose === option.title ? styles.optionActive : "",
                    ].join(" ")}
                    onClick={() => {
                      setSelectedPurpose(option.title);
                      setIsConfirmed(false);
                    }}
                  >
                    <span>{option.title}</span>
                    <small>{option.description}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend>Select a date · April 2026</legend>
              <div className={styles.calendar}>
                {WEEKDAYS.map((weekday) => (
                  <span key={weekday} className={styles.weekday}>
                    {weekday}
                  </span>
                ))}

                {calendarCells.map((cell) =>
                  cell.kind === "blank" ? (
                    <span key={cell.key} className={styles.blankDay} />
                  ) : (
                    (() => {
                      const availability = cell.availability;

                      if (availability) {
                        return (
                          <button
                            key={cell.key}
                            type="button"
                            className={[
                              styles.dayButton,
                              selectedDate === availability.isoDate
                                ? styles.dayButtonActive
                                : "",
                            ].join(" ")}
                            onClick={() => handleDateSelect(availability.isoDate)}
                          >
                            {cell.day}
                          </button>
                        );
                      }

                      return (
                        <span key={cell.key} className={styles.dayDisabled}>
                          {cell.day}
                        </span>
                      );
                    })()
                  ),
                )}
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend>Preferred time</legend>
              <div className={styles.timeGrid}>
                {selectedDateData.times.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={[
                      styles.timeButton,
                      selectedTime === time ? styles.timeButtonActive : "",
                    ].join(" ")}
                    onClick={() => {
                      setSelectedTime(time);
                      setIsConfirmed(false);
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend>Your details</legend>
              <div className={styles.fieldGrid}>
                <label className="visually-hidden" htmlFor="first-name">
                  First name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  required
                  value={formState.firstName}
                  onChange={handleFieldChange}
                />

                <label className="visually-hidden" htmlFor="last-name">
                  Surname
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Surname"
                  autoComplete="family-name"
                  required
                  value={formState.lastName}
                  onChange={handleFieldChange}
                />

                <label className="visually-hidden" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className={styles.fullWidth}
                  value={formState.email}
                  onChange={handleFieldChange}
                />

                <label className="visually-hidden" htmlFor="note">
                  Additional note
                </label>
                <textarea
                  id="note"
                  name="note"
                  placeholder="A note, if you'd like"
                  className={[styles.fullWidth, styles.noteField].join(" ")}
                  value={formState.note}
                  onChange={handleFieldChange}
                />
              </div>
            </fieldset>

            <button type="submit" className={styles.submit}>
              Confirm appointment <span aria-hidden="true">→</span>
            </button>

            {isConfirmed ? (
              <p className={styles.confirmation} role="status">
                Selection saved locally. Studio confirmation still happens
                manually in this prototype.
              </p>
            ) : null}
          </form>

          <aside className={styles.summary}>
            <p className={styles.summaryLabel}>Your visit</p>
            <h2>{selectedPurpose}</h2>
            <p className={styles.summarySub}>with Kyris, in studio</p>

            <div className={styles.summaryRows}>
              <div className={styles.summaryRow}>
                <span>Date</span>
                <strong>{selectedDateData.summaryLabel}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Time</span>
                <strong>{selectedTime} · 90 min</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Purpose</span>
                <strong>{selectedPurpose}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Studio</span>
                <strong>{BOOKING_CONTENT.summaryStudio}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Booking</span>
                <strong className={!fullName ? styles.empty : ""}>
                  {fullName || "awaiting name"}
                </strong>
              </div>
            </div>

            <p className={styles.summaryNote}>{BOOKING_CONTENT.summaryNote}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}