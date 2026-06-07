export const contactDetails = {
  emails: ["radhey.industries@gmail.com", "studio.radheyindustries@gmail.com"],
  phones: ["+91 9274519006", "+91 9016028754"],
  addressLines: [
    "1-309/1, Opp. Meghmani Organic,",
    "Nr. Shree Ram Weigh Bridge, Phase II,",
    "G.I.D.C., Vatva, Ahmedabad-382 445",
  ],
};

export const contactAddress = contactDetails.addressLines.join(" ");
export const contactPhones = contactDetails.phones.join(", ");
