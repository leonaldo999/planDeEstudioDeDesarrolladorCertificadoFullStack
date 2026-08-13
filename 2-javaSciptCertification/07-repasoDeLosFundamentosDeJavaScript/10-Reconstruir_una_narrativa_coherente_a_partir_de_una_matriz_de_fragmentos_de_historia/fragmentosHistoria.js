// Reconstruir una narrativa coherente a partir de una matriz de fragmentos de historia
const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  const compacted = [];
  let removed = 0;

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] !== undefined) {
      compacted.push(fragments[i]);
    } else {
      removed++;
    }
  }

  if (removed > 0) {
    console.log(`[COMPACTED] Removed ${removed} undefined fragment(s).`);
  }

  return compacted;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(fragments) {
  const sorted = [];

  // Inserción estable: los elementos con el mismo id conservan
  // su orden original.
  for (let i = 0; i < fragments.length; i++) {
    const fragment = fragments[i];
    let insertAt = sorted.length;

    for (let j = 0; j < sorted.length; j++) {
      if (fragment.id < sorted[j].id) {
        insertAt = j;
        break;
      }
    }

    sorted.splice(insertAt, 0, fragment);
  }

  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(fragments) {
  const deduped = [];

  for (let i = 0; i < fragments.length; i++) {
    const fragment = fragments[i];

    if (
      deduped.length === 0 ||
      deduped[deduped.length - 1].id !== fragment.id
    ) {
      deduped.push(fragment);
    } else {
      console.log(`[DEDUPED] Removed duplicate fragment with id ${fragment.id}.`);
    }
  }

  return deduped;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(fragments) {
  if (fragments.length === 0) {
    return [];
  }

  const filled = [];

  for (let i = 0; i < fragments.length; i++) {
    const current = fragments[i];

    if (filled.length > 0) {
      const previousId = filled[filled.length - 1].id;

      for (let id = previousId + 1; id < current.id; id++) {
        filled.push({
          id: id,
          text: "[...]"
        });

        console.log(`[FILLED] Added missing fragment with id ${id}.`);
      }
    }

    filled.push({
      id: current.id,
      text: current.text
    });
  }

  return filled;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(fragments) {
  const texts = [];

  for (let i = 0; i < fragments.length; i++) {
    texts.push(fragments[i].text);
  }

  return texts.join("\n");
}

console.log(assembleStory(filledFragments));