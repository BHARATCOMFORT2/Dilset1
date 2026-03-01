const {
  createSwipe,
  getReverseSwipe,
  createMatch,
} = require("../firestore/swipes");

async function handleSwipe({ from, to, mode, action }) {
  await createSwipe(from, to, mode, action);

  if (action !== "like") return { match: false };

  const reverse = await getReverseSwipe(from, to);

  if (reverse && reverse.action === "like") {
    await createMatch(from, to, mode);
    return { match: true };
  }

  return { match: false };
}

module.exports = { handleSwipe };
