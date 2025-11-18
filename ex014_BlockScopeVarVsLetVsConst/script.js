// Lesson 14 — Block Scope & var vs let vs const
// JavaScript’s way of reminding you that boundaries are optional.

// --- 1. Const inside a block ---
// Const and let live only inside their block. They respect personal space.
{
  const x = 100;
  // x exists here, then disappears like your motivation after 3 AM debugging.
}

// --- 2. Var inside a block ---
// Var doesn’t care about your blocks. It’s global-minded and slightly chaotic.
{
  var x = 100;
}

// --- 3. Blocks everywhere ---
// Even an if statement is technically a block.
if (true) {
  console.log(x); // Works, because var leaked out of its block like a memory issue.
  const y = 100; // Block-scoped. Only lives until this curly brace closes.
  console.log(x + y); // 200. Simple math before chaos resumes.
  var c = 300; // Another escape artist.
}

// --- 4. After the block ---
// x and c still exist. y does not. Welcome to JavaScript.
console.log(x); // 100, survived.
console.log(c); // 300, also survived. Congrats, var—you’re the problem.
