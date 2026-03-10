/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  if (isNaN(age) || age < 0) return -1
  const pricings = {
    children: 8,
    teens: 12,
    adults: 15,
    seniors: 10,
  }

  let ticketPrice = 0

  if (age <= 12) {
    ticketPrice += pricings['children']
  }
  else if (age >= 13 && age <= 17) {
    ticketPrice += pricings['teens']
  } else if (age >= 18 && age <= 59) {
    ticketPrice += pricings['adults']
  } else if (age >= 60) {
    ticketPrice += pricings['seniors']
  }

  if (isWeekend) {
    ticketPrice += 3
  }


  return ticketPrice

}
