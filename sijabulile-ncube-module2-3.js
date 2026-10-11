/*
 * ============================================================
 *  Melsoft Academy | Module 2 & 3 Combined Checkpoint
 *  Author: Sijabulile Ncube (s.mabhena@gmail.com)
 *  Run with: node sijabulile-ncube-module2-3.js
 *  Challenge 10 is in challenge10.html (open it in a browser).
 * ============================================================
 *
 * How this file is laid out:
 * Every challenge sits inside its own { } block.Lots of challenges reuse names like user,total and price,
 * and because let and const are block scoped,each block keeps its variables to itself.
 *
 * A note on if/else:
 * The brief says if/else and switch belong to Module 4,so I made a point of not using them anywhere.
 * Every decision in this file is made with a ternary,&& or ||.It was a good exercise in itself.
 *
 * My references:
 * MDN JavaScript reference: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
 * MDN operator precedence table: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 * Plus the Cisco NetAcad JavaScript Essentials 1 notes for Modules 2 and 3,and a lot of testing in the Node REPL.
 */

// ============================================================
// CHALLENGE 1: Variables,types,and the typeof trap
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// ============================================================
{
  console.log("=============== CHALLENGE 1 ===============");

  // ---------- Part A ----------

  // 1.string | const: my name doesn't change while the program runs,so there's nothing to reassign.
  const fullName = "Sijabulile Ncube";

  // 2.number | let: my age goes up once a year,so I want to be allowed to update it.
  let age = 10;

  // 3.boolean | let: true for now,but how I feel about JavaScript could change,so let keeps it open.
  let enjoysJavaScript = true;

  // 4.number (decimal) | const: JavaScript has one number type for whole numbers and decimals.
  // My favourite temperature is a fixed preference,so const.
  const favouriteTemperatureCelsius = 23.6;

  // 5.number (NaN) | const: Number() can't turn that text into a number so it gives NaN.I only store it once.
  const notANumber = Number("not a number");

  // 6.number (Infinity) | const: dividing by zero doesn't crash in JavaScript,it gives Infinity.A fixed value.
  const toInfinity = 1 / 0;

  // 7.number | const: the biggest whole number JavaScript can store without losing accuracy (2^53 - 1).Built in and fixed.
  const biggestSafeNumber = Number.MAX_SAFE_INTEGER;

  // 8.null | let: null means "empty on purpose".I haven't chosen a mentor group yet so I'll fill this in later.
  let mentorGroup = null;

  // 9.undefined | let: I declared it but deliberately set it to undefined.It will get a value later,so let.
  let graduationDate = undefined;

  // 10.string (template literal) | const: built once from two of my variables above and never changed.
  const introduction = `Hi,I'm ${fullName},I'm ${age} and my favourite temperature is ${favouriteTemperatureCelsius} degrees.`;

  console.log("fullName:", fullName);
  console.log("age:", age);
  console.log("enjoysJavaScript:", enjoysJavaScript);
  console.log("favouriteTemperatureCelsius:", favouriteTemperatureCelsius);
  console.log("notANumber:", notANumber);
  console.log("toInfinity:", toInfinity);
  console.log("biggestSafeNumber:", biggestSafeNumber);
  console.log("mentorGroup:", mentorGroup);
  console.log("graduationDate:", graduationDate);
  console.log("introduction:", introduction);

  // ---------- Part B ----------
  console.log("\n--- typeof on my 10 variables ---");
  console.log("typeof fullName:", typeof fullName);
  console.log("typeof age:", typeof age);
  console.log("typeof enjoysJavaScript:", typeof enjoysJavaScript);
  console.log("typeof favouriteTemperatureCelsius:", typeof favouriteTemperatureCelsius);
  console.log("typeof notANumber:", typeof notANumber);
  console.log("typeof toInfinity:", typeof toInfinity);
  console.log("typeof biggestSafeNumber:", typeof biggestSafeNumber);
  console.log("typeof mentorGroup:", typeof mentorGroup);
  console.log("typeof graduationDate:", typeof graduationDate);
  console.log("typeof introduction:", typeof introduction);

  console.log("\n--- the 7 extra cases ---");
  // Prediction: "object".This is the famous one,null is not really an object but typeof says it is.
  console.log("typeof null:", typeof null);
  // Prediction: "number".NaN is a special value inside the number type.
  console.log("typeof NaN:", typeof NaN);
  // Prediction: "undefined".undefined is its own type and typeof reports it honestly.
  console.log("typeof undefined:", typeof undefined);
  // Prediction: "string".The quotes make it text,it doesn't matter that the text looks like a number.
  console.log('typeof "42":', typeof "42");
  // Prediction: "string".The inner typeof runs first and gives the word "number",and a word is a string.
  console.log("typeof (typeof 42):", typeof (typeof 42));
  // Prediction: "object".Arrays don't get their own typeof label,they are objects underneath.
  console.log("typeof [1,2,3]:", typeof [1, 2, 3]);
  // Prediction: "function".Functions are objects too,but typeof gives them their own label.
  console.log("typeof function() {}:", typeof function () {});

  /*
   * Why does typeof null give "object" and typeof NaN give "number"?
   *
   * null (the historical reason):
   * In the very first version of JavaScript (1995),every value was stored with a small type tag,and the tag for objects was 0.
   * null was stored as a null pointer,which was all zeros,so typeof read the 0 tag and said "object".
   * A fix was proposed years later but rejected because it would have broken too many existing websites.
   * So it's a bug that was kept on purpose for backwards compatibility.
   *
   * NaN (the technical reason):
   * JavaScript numbers follow the IEEE 754 floating point standard.That standard defines NaN as a real numeric value
   * that represents the result of an impossible or undefined calculation,like 0 / 0 or Number("not a number").
   * So NaN is not a mistake,it's a member of the number type whose job is to say "this calculation failed".
   */
}

// ============================================================
// CHALLENGE 2: Type conversion workshop
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// MDN: developer.mozilla.org/en-US/docs/Glossary/Type_coercion
// ============================================================
{
  console.log("\n=============== CHALLENGE 2 ===============");

  // ---------- Part A: explicit conversion ----------

  // Wraps strings in quotes for display,so "" and "0" are visible in the console and don't look like numbers.
  const show = (value) => (typeof value === "string" ? `"${value}"` : String(value));

  // 8 values x 5 methods is 40 results.Instead of 40 console.logs I wrote one small function and call it 8 times.
  // It prints each conversion result next to its typeof.
  function convertFiveWays(value) {
    console.log(`\n>> Starting value: ${show(value)} (${typeof value})`);
    console.log(`   Number()     -> ${show(Number(value))} | ${typeof Number(value)}`);
    console.log(`   parseInt()   -> ${show(parseInt(value))} | ${typeof parseInt(value)}`);
    console.log(`   parseFloat() -> ${show(parseFloat(value))} | ${typeof parseFloat(value)}`);
    console.log(`   Boolean()    -> ${show(Boolean(value))} | ${typeof Boolean(value)}`);
    console.log(`   String()     -> ${show(String(value))} | ${typeof String(value)}`);
  }

  convertFiveWays("123");
  convertFiveWays("3.14");
  convertFiveWays("hello");
  convertFiveWays("42abc");
  convertFiveWays("");
  convertFiveWays(0);
  convertFiveWays(null);
  convertFiveWays(undefined);

  // ---------- Part B: implicit coercion ----------
  console.log("\n--- Part B: implicit coercion ---");

  // 1.Predict: "53" (string).+ sees a string on the left,so it joins instead of adding.3 becomes "3".
  console.log('1) "5" + 3          ->', JSON.stringify("5" + 3), typeof ("5" + 3));
  // 2.Predict: 2 (number).Minus has no string version,so "5" is converted to 5 before subtracting.
  console.log('2) "5" - 3          ->', "5" - 3, typeof ("5" - 3));
  // 3.Predict: 10 (number).* only does maths,so both strings are converted to numbers.
  console.log('3) "5" * "2"        ->', "5" * "2", typeof ("5" * "2"));
  // 4.Predict: 2 (number).No strings involved,so + adds and true is converted to 1.
  console.log("4) true + 1         ->", true + 1, typeof (true + 1));
  // 5.Predict: "true1" (string).There's a string,so true is turned into the text "true" and joined.
  console.log('5) true + "1"       ->', JSON.stringify(true + "1"), typeof (true + "1"));
  // 6.Predict: 0 (number).false becomes 0 and null becomes 0,so it's 0 + 0.
  console.log("6) false + null     ->", false + null, typeof (false + null));
  // 7.Predict: NaN (number).null becomes 0 but undefined becomes NaN,and anything plus NaN is NaN.
  console.log("7) null + undefined ->", null + undefined, typeof (null + undefined));
  // 8.Predict: Infinity (number).IEEE 754 says a positive number divided by 0 is Infinity,not an error.
  console.log("8) 1 / 0            ->", 1 / 0, typeof (1 / 0));
  // 9.Predict: NaN (number).0 / 0 has no meaningful answer,so the result is NaN.
  console.log("9) 0 / 0            ->", 0 / 0, typeof (0 / 0));
  // 10.Predict: NaN (number).Minus forces "abc" into a number,that fails and gives NaN,and NaN - 1 stays NaN.
  console.log('10) "abc" - 1        ->', "abc" - 1, typeof ("abc" - 1));
  // 11.Predict: "" (string).Each array is turned into a string first and an empty array becomes "",so "" + "".
  console.log("11) [] + []          ->", JSON.stringify([] + []), typeof ([] + []));
  // 12.Predict: "12" (string).[1] becomes "1" and [2] becomes "2",then + joins the two strings.
  console.log("12) [1] + [2]        ->", JSON.stringify([1] + [2]), typeof ([1] + [2]));
  // (I used JSON.stringify on the string results so the quotes show.Without it,an empty string prints as nothing.)

  /*
   * ---------- Part C: the three questions ----------
   *
   * 1.Number('42abc') vs parseInt('42abc')
   *    Number('42abc') returns NaN.Number() checks the whole string and if any part isn't valid,the whole thing fails.
   *    parseInt('42abc') returns 42.parseInt() reads from the left,keeps the digits,and stops quietly at the first "a".
   *    So parseInt is forgiving and Number is strict.For user input I'd rather be strict,because "42abc" is a mistake
   *    that should be caught,not quietly turned into 42.
   *
   * 2.When I'd use parseFloat instead of parseInt
   *    Whenever the decimals matter: prices,interest rates,exchange rates,weights.
   *    Scenario where it costs money: a loan system reads the interest rate "11.75" from a form with parseInt.
   *    parseInt gives 11,so every customer is charged 11% instead of 11.75%.On a R500 000 home loan that's R3 750 a year
   *    in lost interest per customer,and nothing crashes,so nobody notices until an audit.
   *
   * 3.What Number('') returns
   *    It returns 0,not NaN.That's dangerous because an empty field looks like a valid number.
   *    Form example: a "deposit amount" field on a banking form.The user forgets to fill it in,the code does Number(input),
   *    gets 0,and the Number.isNaN check passes because 0 is a real number.The system then records a R0 deposit
   *    as if the customer chose that,instead of showing "please enter an amount".
   *    The fix is to check for an empty string (after trimming) before converting.
   */
}

// ============================================================
// CHALLENGE 3: Operators masterclass
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
// ============================================================
{
  console.log("\n=============== CHALLENGE 3 ===============");

  // ---------- 1.Arithmetic (with modulo) ----------
  // Works out a worker's monthly net salary: gross minus 25% tax,1% UIF and a fixed R2 500 medical aid.
  const grossSalary = 45000;
  const incomeTax = grossSalary * 0.25;
  const uif = grossSalary * 0.01;
  const medicalAid = 2500;
  const netSalary = grossSalary - incomeTax - uif - medicalAid;
  console.log(`Net salary: R${netSalary.toFixed(2)}`);
  // Modulo in a real situation: the worker moves savings in full R1 000 blocks.How many blocks,and what's left over?
  // Math.floor drops the decimals,and % gives me what's left after taking out every full R1 000.
  const savingsBlocks = Math.floor(netSalary / 1000);
  const leftOverRands = netSalary % 1000;
  console.log(`That's ${savingsBlocks} full R1 000 savings transfers with R${leftOverRands} left over`);

  // ---------- 2.Assignment (compound operators) ----------
  // A cart that starts empty,gets three items,then a 10% discount and 15% VAT.
  let cartTotal = 0;
  cartTotal += 150; // add item 1
  cartTotal += 85; // add item 2
  cartTotal += 220; // add item 3,cart is now R455
  cartTotal -= cartTotal * 0.1; // take off 10% discount,cart is now R409.50
  cartTotal *= 1.15; // add 15% VAT
  console.log(`Cart total (raw): ${cartTotal}`);
  console.log(`Cart total with toFixed(2): R${cartTotal.toFixed(2)}`);
  // The raw number is 470.92499999999995 because of floating point,so toFixed(2) rounds it DOWN to R470.92.
  // The true answer is 470.925,which should round UP to R470.93.So the customer is short changed by a cent.
  // My first fix was adding Number.EPSILON before rounding,but I tested it and it STILL gave 470.92.
  // EPSILON is far too tiny to matter at a number as big as 470,so that trick only helps with small values.
  // The fix that actually works is doing the same cart in whole cents,the way banks do (more on this in Challenge 9):
  let cartTotalCents = 0;
  cartTotalCents += 15000; // R150.00
  cartTotalCents += 8500; // R85.00
  cartTotalCents += 22000; // R220.00
  cartTotalCents -= (cartTotalCents * 10) / 100; // 10% discount,still a whole number: 40950 cents
  cartTotalCents *= 115; // 15% VAT,step 1: multiply by 115 (whole numbers stay exact)
  cartTotalCents /= 100; // step 2: divide by 100,giving exactly 47092.5 cents
  cartTotalCents = Math.round(cartTotalCents); // round to a whole cent: 47093
  console.log(`Cart total worked in cents: R${(cartTotalCents / 100).toFixed(2)}`);

  // ---------- 3.Comparison ----------
  // Signup form check: at least 18,password at least 8 characters,confirmed email exactly matching the typed email.
  const signupAge = 19;
  const signupPassword = "Sunrise2026";
  const typedEmail = "thabo@example.com";
  const confirmedEmail = "thabo@example.com";
  const isOldEnough = signupAge >= 18;
  const isPasswordLongEnough = signupPassword.length >= 8;
  const emailsMatch = typedEmail === confirmedEmail; // === so the type has to match too,not just the value
  console.log("Old enough?", isOldEnough, "| Password long enough?", isPasswordLongEnough, "| Emails match?", emailsMatch);

  // ---------- 4.Logical ----------
  // Premium dashboard: (logged in AND email verified) OR admin.The brackets make my intention obvious.
  const isLoggedIn = true;
  const isEmailVerified = false;
  const isAdmin = true;
  const canSeePremiumDashboard = (isLoggedIn && isEmailVerified) || isAdmin;
  console.log("Can see premium dashboard?", canSeePremiumDashboard);

  // ---------- 5.Unary ----------
  // Unary + converts the text from a form field into a number in one character.
  const ageFromForm = "25";
  const ageAsNumber = +ageFromForm;
  console.log("Unary + result:", ageAsNumber, typeof ageAsNumber);
  // ! flips a boolean,so this is a one line dark mode toggle.
  let isDarkMode = false;
  isDarkMode = !isDarkMode;
  console.log("Dark mode after toggle:", isDarkMode);

  // ---------- 6.Ternary ----------
  // Picks a badge from the membership type.Two levels deep is about as far as I'd ever nest a ternary.
  const membershipType = "trial";
  const badge = membershipType === "premium" ? "Premium Member" : membershipType === "trial" ? "Trial Member" : "Free Member";
  console.log("Badge:", badge);

  // ---------- 7.String concatenation ----------
  const firstName = "Thabo";
  const lastName = "Nkosi";
  const userAge = 28;
  // With + : every space and comma has to be its own little string,which is easy to get wrong.
  const greetingWithPlus = "Welcome back " + firstName + " " + lastName + ",you are " + userAge + " years old.";
  // With a template literal: it reads exactly like the final sentence.
  const greetingWithTemplate = `Welcome back ${firstName} ${lastName},you are ${userAge} years old.`;
  console.log(greetingWithPlus);
  console.log(greetingWithTemplate);
  // The template literal is better.It's easier to read,I can't forget a space between pieces,
  // and because ${} slots are clearly separate from the text there's less chance of an accidental "5" + 3 style join.

  /*
   * ---------- Comment block answers ----------
   *
   * 1.Prefix (++x) vs postfix (x++)
   *    Postfix hands back the OLD value and then adds 1.Prefix adds 1 FIRST and hands back the new value.
   *    One line example: let n = 5; console.log(n++,++n); prints 5 7.
   *    n++ gives 5 (then n becomes 6),and ++n turns 6 into 7 and gives 7.(This runs just below.)
   *
   * 2.Three real uses for modulo
   *    - Even or odd: number % 2 === 0 means even.Handy for striping alternate table rows.
   *    - Wrapping around: in an image carousel,(currentIndex + 1) % totalImages jumps from the last image back to the first.
   *    - Splitting units: 135 minutes % 60 is 15,so 135 minutes is 2 hours and 15 minutes.Same idea for cents
   *      (amountInCents % 100 gives the cents part) or my R100 notes example above.
   *
   * 3.Nested ternaries
   *    One level of nesting is fine when it reads like a simple list of options,like my badge example.
   *    I would NOT use one when there are more than three outcomes,when each branch needs more than a simple value,
   *    or when the conditions are complicated.At that point it becomes hard to read and easy to break,
   *    and if/else or a switch (Module 4) is clearer for the next person.
   */
  let n = 5;
  console.log("Prefix vs postfix demo:", n++, ++n);
}

// ============================================================
// CHALLENGE 4: The equality deep dive
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
// ============================================================
{
  console.log("\n=============== CHALLENGE 4 ===============");

  // ---------- Part A: predict and verify ----------

  // Prediction: true.Why: == converts false to 0,so it becomes 0 == 0.
  console.log("1) 0 == false          ->", 0 == false);
  // Prediction: false.Why: === doesn't convert,and a number is not a boolean.
  console.log("2) 0 === false         ->", 0 === false);
  // Prediction: true.Why: == turns the empty string into 0,so 0 == 0.
  console.log('3) "" == 0             ->', "" == 0);
  // Prediction: false.Why: a string and a number are different types,=== stops there.
  console.log('4) "" === 0            ->', "" === 0);
  // Prediction: true.Why: == converts "0" to the number 0.
  console.log('5) "0" == 0            ->', "0" == 0);
  // Prediction: false.Why: different types,no conversion with ===.
  console.log('6) "0" === 0           ->', "0" === 0);
  // Prediction: true.Why: the spec has a special rule that null and undefined are loosely equal to each other (and nothing else).
  console.log("7) null == undefined   ->", null == undefined);
  // Prediction: false.Why: they are two different types.
  console.log("8) null === undefined  ->", null === undefined);
  // Prediction: false.Why: with ==,null is NOT converted to a number.It only equals undefined.
  console.log("9) null == 0           ->", null == 0);
  // Prediction: false.Why: null == 0 was false above,so I'm assuming null >= 0 will be false too.
  // WRONG,it's true.>= is a relational operator and those DO convert null to a number,so it's really 0 >= 0.
  console.log("10) null >= 0           ->", null >= 0);
  // Prediction: false.Why: same conversion,null becomes 0,and 0 > 0 is false.
  console.log("11) null > 0            ->", null > 0);
  // Prediction: false.Why: NaN is the one value that is not equal to anything,including itself.
  console.log("12) NaN == NaN          ->", NaN == NaN);
  // Prediction: false.Why: same rule with strict equality.
  console.log("13) NaN === NaN         ->", NaN === NaN);
  // Prediction: true.Why: Object.is checks if two values are the SAME value,and it treats NaN as the same as NaN.
  console.log("14) Object.is(NaN,NaN)  ->", Object.is(NaN, NaN));
  // Prediction: true.Why: === treats positive and negative zero as equal.
  console.log("15) +0 === -0           ->", +0 === -0);
  // Prediction: false.Why: Object.is is stricter and can tell +0 and -0 apart.
  console.log("16) Object.is(+0,-0)    ->", Object.is(+0, -0));
  // Prediction: false.Why: an array and a string are completely different things.
  // WRONG,it's true.== turns the array into a string with toString() first,and [1,2,3] becomes "1,2,3".
  console.log('17) [1,2,3] == "1,2,3"  ->', [1, 2, 3] == "1,2,3");
  // Prediction: true.Why: false becomes 0,[] becomes "" which becomes 0,so 0 == 0.
  console.log("18) [] == false         ->", [] == false);
  // Prediction: true.Why: [] becomes "" and then 0.
  console.log("19) [] == 0             ->", [] == 0);
  // Prediction: true.Why: [0] becomes "0" which becomes 0,and false becomes 0.
  console.log("20) [0] == false        ->", [0] == false);

  /*
   * The null >= 0 vs null > 0 puzzle:
   * Equality (==) and the relational operators (>,<,>=,<=) follow DIFFERENT rules.
   * The relational ones convert null to a number (0).So null > 0 is 0 > 0 (false) and null >= 0 is 0 >= 0 (true).
   * But == has its own special rule for null: it is only loosely equal to undefined.So null == 0 is false.
   * That's why null >= 0 is true even though null > 0 and null == 0 are both false.
   * Fun fact: [] == false is true,but an empty array is truthy in an if statement.Another reason to use ===.
   */

  // ---------- Part B: real world form validator ----------
  // One function I can run on any form.Each check prints PASS or FAIL using a ternary.
  function validatePasswordReset(form) {
    const passwordsMatch = form.newPassword === form.confirmPassword;
    const emailsMatch = form.currentEmail === form.confirmEmail;
    const passwordIsNotEmail = form.newPassword !== form.currentEmail;
    const passwordIsLongEnough = form.newPassword.length >= 8;

    console.log(`  Passwords match exactly:     ${passwordsMatch ? "PASS" : "FAIL"}`);
    console.log(`  Emails match exactly:        ${emailsMatch ? "PASS" : "FAIL"}`);
    console.log(`  Password is not the email:   ${passwordIsNotEmail ? "PASS" : "FAIL"}`);
    console.log(`  Password at least 8 chars:   ${passwordIsLongEnough ? "PASS" : "FAIL"}`);
  }

  // Test 1: everything correct.
  console.log("\nTest case 1 (should pass all four):");
  validatePasswordReset({
    newPassword: "Blue!Harbour27",
    confirmPassword: "Blue!Harbour27",
    currentEmail: "lerato@example.com",
    confirmEmail: "lerato@example.com",
  });

  // Test 2: email used as password,and the confirm email has a capital letter,so 2 checks fail.
  console.log("\nTest case 2 (should fail at least two):");
  validatePasswordReset({
    newPassword: "lerato@example.com",
    confirmPassword: "lerato@example.com",
    currentEmail: "lerato@example.com",
    confirmEmail: "Lerato@example.com",
  });

  /*
   * Which equality operator did I use and why does it matter here?
   * I used === (and !==) for every check.With passwords you want an exact match,character for character AND type for type.
   * == can treat different values as equal: for example a PIN entered as the number 1234 would be == the string "1234",
   * and an empty value can be == 0.For a security check I don't want JavaScript deciding two different things are
   * "close enough".=== only says yes when they are truly identical,which is exactly what a password check needs.
   */
}

// ============================================================
// CHALLENGE 5: Operator precedence
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// ============================================================
{
  console.log("\n=============== CHALLENGE 5 ===============");

  // 1.Prediction: 13.Order: 3 * 4 = 12 first (* beats + and -),then 2 + 12 = 14,then 14 - 1 = 13.
  console.log("1) 2 + 3 * 4 - 1                 ->", 2 + 3 * 4 - 1);
  // 2.Prediction: 15.Order: brackets first,2 + 3 = 5 and 4 - 1 = 3,then 5 * 3 = 15.
  console.log("2) (2 + 3) * (4 - 1)             ->", (2 + 3) * (4 - 1));
  // 3.Prediction: 4.Order: minus works left to right,so 10 - 4 = 6,then 6 - 2 = 4 (not 10 - 2 = 8).
  console.log("3) 10 - 4 - 2                    ->", 10 - 4 - 2);
  // 4.Prediction: 64.Order: left to right like the others,2 ** 3 = 8,then 8 ** 2 = 64.
  // WRONG,it's 512.** is RIGHT associative,so 3 ** 2 = 9 runs first,then 2 ** 9 = 512.The brief did warn me!
  console.log("4) 2 ** 3 ** 2                   ->", 2 ** 3 ** 2);
  // 5.Prediction: 3.Order: % and * have equal precedence and go left to right: 10 % 3 = 1,then 1 * 2 = 2,then 2 + 1 = 3.
  console.log("5) 10 % 3 * 2 + 1                ->", 10 % 3 * 2 + 1);
  // 6.Prediction: 5.Order: left to right,100 / 4 = 25,then 25 / 5 = 5.
  console.log("6) 100 / 4 / 5                   ->", 100 / 4 / 5);
  // 7.Prediction: true.Order: 5 + 2 = 7,then the comparisons 7 > 6 = true and 3 < 4 = true,then true && true.
  console.log("7) 5 + 2 > 6 && 3 < 4            ->", 5 + 2 > 6 && 3 < 4);
  // 8.Prediction: true.Order: && beats ||,so true && false = false and true && true = true,then false || true = true.
  console.log("8) true && false || true && true ->", true && false || true && true);
  // 9.Prediction: false.Order: the ! operators go first: !false = true,!!0 = false,then true && false = false.
  console.log("9) !false && !!0                 ->", !false && !!0);
  // 10.Prediction: true.Order: 5 > 3 = true and 10 < 20 = true,so the && is true.
  // || short circuits and never even looks at !(2 === "2").(It would have been !false = true anyway.)
  console.log('10) 5 > 3 && 10 < 20 || !(2 === "2") ->', 5 > 3 && 10 < 20 || !(2 === "2"));
  // 11.Prediction: 1035.Order: left to right,1000 * 1.15 = 1150,then 1150 * 0.9 = 1035.
  // I half expected floating point noise here,but these particular numbers happen to land exactly.
  console.log("11) 1000 * 1.15 * 0.9             ->", 1000 * 1.15 * 0.9);
  // 12.Prediction: "number1".Order: typeof binds tighter than +,so typeof 5 = "number",then "number" + 1 joins.
  console.log("12) typeof 5 + 1                  ->", typeof 5 + 1);
  // 13.Prediction: "number".Order: brackets first,5 + 1 = 6,then typeof 6 = "number".
  console.log("13) typeof (5 + 1)                ->", typeof (5 + 1));
  // 14.Prediction: "56".Order: 3 * 2 = 6 first,then "5" + 6 is a string join.
  console.log('14) "5" + 3 * 2                   ->', "5" + 3 * 2);
  // 15.Prediction: 4.Order: left to right,"5" - 3 = 2 (minus converts to number),then 2 + 2 = 4.
  console.log('15) "5" - 3 + 2                   ->', "5" - 3 + 2);

  /*
   * Interview answer: when should you add parentheses even if precedence doesn't need them?
   * Whenever the expression mixes different kinds of operators,especially && with || or maths in a financial calculation.
   * Code is read far more often than it is written,and brackets make the intended order obvious to the next developer
   * without them having to remember a precedence table.If a misread could cost money or open a security hole,I add them.
   */
}

// ============================================================
// CHALLENGE 6: Ternary and short circuit patterns
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// ============================================================
{
  console.log("\n=============== CHALLENGE 6 ===============");

  // ---------- Part A: ternary chain for grades ----------
  // One ternary expression,checked from the top grade down.As soon as a condition is true,the rest are skipped.
  const toLetterGrade = (percentage) =>
    percentage >= 90 ? "A" : percentage >= 80 ? "B" : percentage >= 70 ? "C" : percentage >= 60 ? "D" : percentage >= 50 ? "E" : "F";

  console.log("95% ->", toLetterGrade(95));
  console.log("82% ->", toLetterGrade(82));
  console.log("73% ->", toLetterGrade(73));
  console.log("65% ->", toLetterGrade(65));
  console.log("54% ->", toLetterGrade(54));
  console.log("42% ->", toLetterGrade(42));
  console.log("0% ->", toLetterGrade(0));
  console.log("100% ->", toLetterGrade(100));

  // ---------- Part B: short circuit defaults ----------
  // Profile 1: the API sent nothing at all.
  const profileOne = {};
  // Profile 2: the API sent a real 0 for notifications and an empty string for theme.
  const profileTwo = { notificationCount: 0, theme: "" };

  // I wrapped the defaults in a function so I can apply exactly the same rules to both profiles.
  function applyDefaults(profile) {
    return {
      displayName: profile.displayName || "Guest User",
      theme: profile.theme || "light",
      maxResults: profile.maxResults || 10,
      lastLogin: profile.lastLogin ?? "Never",
      notificationCount: profile.notificationCount ?? 0,
    };
  }

  console.log("\nProfile 1 with defaults:", applyDefaults(profileOne));
  console.log("Profile 2 with defaults:", applyDefaults(profileTwo));

  // Showing the difference directly,using a default of 99 so it's easy to spot.
  console.log("profileTwo.notificationCount || 99 ->", profileTwo.notificationCount || 99);
  console.log("profileTwo.notificationCount ?? 99 ->", profileTwo.notificationCount ?? 99);
  console.log('profileTwo.theme || "light"        ->', profileTwo.theme || "light");
  console.log('profileTwo.theme ?? "light"        ->', JSON.stringify(profileTwo.theme ?? "light"));

  /*
   * Why ?? and || behave differently here:
   * || falls back to the default whenever the left side is FALSY,and falsy includes 0,"" and false,not just missing values.
   * ?? only falls back when the left side is null or undefined (actually missing).
   *
   * notificationCount is 0 in profile 2.That's a real value,the user genuinely has zero notifications.
   * With || the 0 is treated as "missing" and replaced (99 in my demo).With ?? the 0 is kept,which is correct.
   *
   * theme is "" in profile 2.Here || is actually what I want,because a blank theme name isn't usable,
   * so replacing it with "light" makes sense.?? would keep the empty string and the app would have no theme.
   *
   * Rule I'll remember: use ?? when 0 or "" are valid answers,use || when they should count as "nothing there".
   */

  // ---------- Part C: guard clauses with && and ?.----------
  const fullUser = { name: "Ayanda", address: { city: "Johannesburg" } };
  const userWithoutAddress = { name: "Kagiso" };
  const nullUser = null;

  // Technique 1: && guards.Each step only runs if the one before it was truthy,otherwise it returns that falsy value.
  console.log("\n&& guard,full user:      ", fullUser && fullUser.address && fullUser.address.city);
  console.log("&& guard,no address:     ", userWithoutAddress && userWithoutAddress.address && userWithoutAddress.address.city);
  console.log("&& guard,null user:      ", nullUser && nullUser.address && nullUser.address.city);

  // Technique 2: optional chaining.If anything along the way is null or undefined it stops and gives undefined.
  console.log("?.full user:             ", fullUser?.address?.city);
  console.log("?.no address:            ", userWithoutAddress?.address?.city);
  console.log("?.null user:             ", nullUser?.address?.city);

  // Technique 3: optional chaining plus ?? so the user always sees something readable.
  console.log("?.+ ?? full user:        ", fullUser?.address?.city ?? "Unknown city");
  console.log("?.+ ?? no address:       ", userWithoutAddress?.address?.city ?? "Unknown city");
  console.log("?.+ ?? null user:        ", nullUser?.address?.city ?? "Unknown city");
  // Note: the && version gives back null for the null user (the first falsy value),while ?.gives undefined.

  // ---------- Part D: predict the output ----------
  console.log("\n--- Part D ---");
  // 1.Predict: "finally" (string).|| keeps going past every falsy value and returns the first truthy one.
  console.log('1) null || undefined || 0 || "" || "finally" ->', null || undefined || 0 || "" || "finally");
  // 2.Predict: "finally" (string).I thought ?? would skip past 0 and "" the same way || does.
  // WRONG,it's 0.?? only skips null and undefined.0 is not nullish,so it stops right there.
  console.log('2) null ?? undefined ?? 0 ?? "" ?? "finally" ->', null ?? undefined ?? 0 ?? "" ?? "finally");
  // 3.Predict: "first truthy" (string).0 is falsy so || moves on.
  console.log('3) 0 || "first truthy"                        ->', 0 || "first truthy");
  // 4.Predict: 0 (number).0 is not null or undefined so ?? keeps it.
  console.log('4) 0 ?? "first non-nullish"                   ->', 0 ?? "first non-nullish");
  // 5.Predict: false (boolean).&& stops at the first falsy value,so it never reaches the string.
  console.log('5) true && false && "never reached"           ->', true && false && "never reached");
  // 6.Predict: "third" (string).Everything is truthy,so && returns the last value.
  console.log('6) "first" && "second" && "third"             ->', "first" && "second" && "third");
  // 7.Predict: "yes" (string).The brackets run first: true && "yes" gives "yes",then false || "yes" gives "yes".
  console.log('7) false || (true && "yes")                   ->', false || (true && "yes"));
  // 8.Predict: "yes" (string).Brackets first: false || true gives true,then true && "yes" gives "yes".
  console.log('8) (false || true) && "yes"                   ->', (false || true) && "yes");
  // 9.Predict: 3 (number).All truthy,so && returns the last one.
  console.log("9) 1 && 2 && 3                                ->", 1 && 2 && 3);
  // 10.Predict: undefined (undefined).?.sees null straight away and stops the whole chain.
  console.log("10) null?.foo?.bar?.baz                        ->", null?.foo?.bar?.baz);
}

// ============================================================
// CHALLENGE 7: typeof,instanceof,delete
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
// ============================================================
{
  console.log("\n=============== CHALLENGE 7 ===============");

  // ---------- Part A: typeof mastery ----------
  // Prediction: "number"
  console.log("typeof 42:", typeof 42);
  // Prediction: "string"
  console.log('typeof "hello":', typeof "hello");
  // Prediction: "boolean"
  console.log("typeof true:", typeof true);
  // Prediction: "undefined"
  console.log("typeof undefined:", typeof undefined);
  // Prediction: "object" (the famous 1995 bug)
  console.log("typeof null:", typeof null);
  // Prediction: "object"
  console.log("typeof {}:", typeof {});
  // Prediction: "object" (arrays are objects underneath)
  console.log("typeof []:", typeof []);
  // Prediction: "function"
  console.log("typeof function() {}:", typeof function () {});
  // Prediction: "number"
  console.log("typeof NaN:", typeof NaN);
  // Prediction: ReferenceError,because using a variable that was never declared normally crashes.
  // WRONG,it gives "undefined" and doesn't throw.typeof is specially allowed to check names that don't exist.
  console.log("typeof undeclaredVariable:", typeof undeclaredVariable);

  // One liner to tell an array apart from a plain object:
  const shoppingList = ["bread", "milk"];
  const settings = { theme: "dark" };
  console.log("Array.isArray(shoppingList):", Array.isArray(shoppingList));
  console.log("Array.isArray(settings):", Array.isArray(settings));

  // ---------- Part B: instanceof ----------
  // Prediction: true.An array is created by the Array constructor.
  console.log("\n[] instanceof Array:", [] instanceof Array);
  // Prediction: true.Every array is also an Object further up the chain.
  console.log("[] instanceof Object:", [] instanceof Object);
  // Prediction: true.
  console.log("{} instanceof Object:", {} instanceof Object);
  // Prediction: false."hello" is a primitive string,not an object made by new String(),and instanceof only works on objects.
  console.log('"hello" instanceof String:', "hello" instanceof String);
  // Prediction: true.new String() creates a String OBJECT (a wrapper),which is an instance of String.
  console.log('new String("hello") instanceof String:', new String("hello") instanceof String);
  // Prediction: false.42 is a primitive number,same reason as the string.
  console.log("42 instanceof Number:", 42 instanceof Number);
  // Prediction: true.new Date() makes a Date object.
  console.log("new Date() instanceof Date:", new Date() instanceof Date);
  // Prediction: true.A regex literal creates a RegExp object.
  console.log("/abc/ instanceof RegExp:", /abc/ instanceof RegExp);

  /*
   * When each tool is the right one:
   * typeof is right,instanceof is wrong: checking if a form value is a string.typeof value === "string" works,
   * but value instanceof String is false for normal strings because they are primitives,not String objects.
   *
   * instanceof is right,typeof is wrong: checking if something is a Date.typeof new Date() just says "object",
   * which tells me nothing.date instanceof Date tells me it really is a Date so I can safely call date.getFullYear().
   */

  // ---------- Part C: delete and its gotchas ----------
  // 1.Deleting a property from an object.const stops me reassigning user,but I can still change what's inside it.
  const user = { name: "Lerato", age: 25, role: "student" };
  console.log("\nBefore delete:", user);
  delete user.role;
  console.log("After delete user.role:", user);

  // 2.delete on a normal variable doesn't work.It returns false and x is untouched.
  // (In strict mode this line would be a SyntaxError instead.)
  let x = 5;
  const deleteResult = delete x;
  console.log("delete x returned:", deleteResult, "| x is still:", x);

  // 3.delete on an array leaves a hole.
  const arr = [1, 2, 3, 4];
  delete arr[1];
  console.log("arr after delete arr[1]:", arr);
  console.log("arr.length:", arr.length);
  console.log("arr[1]:", arr[1]);
  // This is dangerous because the length stays 4 and you're left with an "empty" slot.Anything that loops by index
  // will hit undefined in the middle,so totals become NaN and lists show blank rows.The item wasn't really removed.

  // 4.Trying to delete Math.PI.
  const deletePiResult = delete Math.PI;
  console.log("delete Math.PI returned:", deletePiResult, "| Math.PI is still:", Math.PI);
  // It doesn't work because Math.PI is a non configurable property.Every property has hidden settings,
  // and "configurable: false" means it can't be deleted or redefined.JavaScript locks it so nobody can break maths for everyone.

  /*
   * Final question: removing an item from an array.
   * I wouldn't use delete because it leaves a hole and doesn't change the length (as shown above).
   * Instead I'd use:
   * - splice(index,1) to remove it in place and shift everything after it down.arr.splice(1,1) turns [1,2,3,4] into [1,3,4].
   * - filter() to make a NEW array without that item,which is the common choice in React because it doesn't change the original.
   * - shift() or pop() if it's the first or last item.
   * MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   */
}

// ============================================================
// CHALLENGE 8: Bitwise permission system
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// ============================================================
{
  console.log("\n=============== CHALLENGE 8 ===============");

  const READ = 1; // binary 0001
  const WRITE = 2; // binary 0010
  const DELETE = 4; // binary 0100
  const ADMIN = 8; // binary 1000

  // Shows a number as 5 binary digits so I can actually see which bits are switched on.
  const bits = (value) => value.toString(2).padStart(5, "0");

  // 1.READ | WRITE.OR switches on every bit that is on in either number: 0001 | 0010 = 0011 (3).
  let editor = READ | WRITE;
  console.log("1) Editor (READ | WRITE):", editor, bits(editor));

  // 2.Admin with every permission switched on: 0001 | 0010 | 0100 | 1000 = 1111 (15).
  const superUser = READ | WRITE | DELETE | ADMIN;
  console.log("2) Admin (all four):", superUser, bits(superUser));

  // 3.Does the editor have READ? AND keeps only the bits on in BOTH numbers.0011 & 0001 = 0001,which isn't 0,so yes.
  console.log("3) Editor has READ?", (editor & READ) !== 0 ? "Yes" : "No");

  // 4.Does the editor have DELETE? 0011 & 0100 = 0000,so no.
  console.log("4) Editor has DELETE?", (editor & DELETE) !== 0 ? "Yes" : "No");

  // 5.Grant DELETE with |=.Same as editor = editor | DELETE.0011 | 0100 = 0111 (7).
  editor |= DELETE;
  console.log("5) Editor after granting DELETE:", editor, bits(editor));

  // 6.Revoke WRITE.This is the tricky one,so step by step:
  //    ~WRITE flips every bit of 0010,giving ...1101 (every bit on EXCEPT the WRITE bit).
  //    editor & ~WRITE keeps everything the editor had,except the WRITE bit,which gets forced to 0.
  //    0111 & 1101 = 0101 (5),so the editor keeps READ and DELETE but loses WRITE.
  editor &= ~WRITE;
  console.log("6) Editor after revoking WRITE:", editor, bits(editor));
  console.log("   Editor still has WRITE?", (editor & WRITE) !== 0 ? "Yes" : "No");

  // 7.XOR flips a bit: if it's off it turns on,if it's on it turns off.Doing it twice puts it back.
  editor ^= ADMIN;
  console.log("7) After first ADMIN toggle:", editor, bits(editor), "| has ADMIN?", (editor & ADMIN) !== 0 ? "Yes" : "No");
  editor ^= ADMIN;
  console.log("   After second ADMIN toggle:", editor, bits(editor), "| has ADMIN?", (editor & ADMIN) !== 0 ? "Yes" : "No");

  // 8.Left shift moves every bit one place to the left,which doubles the number.1000 << 1 = 10000 (16).
  // So SUPER_ADMIN is automatically the next power of 2 and I never had to type 16.
  const SUPER_ADMIN = ADMIN << 1;
  console.log("8) SUPER_ADMIN:", SUPER_ADMIN, bits(SUPER_ADMIN));

  /*
   * Interview answers:
   *
   * 1.Why bitwise flags instead of an array like ['read','write']?
   *    - Size and speed: all of a user's permissions fit in ONE small number.That's tiny to store in a database column
   *      or a login token,and checking a permission is a single & operation instead of searching through an array.
   *    - Combining is easy: permissions can be merged or compared in one step (userA | userB,or (perms & REQUIRED) === REQUIRED
   *      to check several at once).Unix file permissions (rwx = 4 + 2 + 1 = 7) work exactly like this.
   *
   * 2.The downside,and when I wouldn't use it
   *    It's hard to read.A permissions value of 13 means nothing to a person until they work out the binary.
   *    I wouldn't use it for a small app where readability matters more than storage,or where roles change often
   *    and need names a business user can understand.A list of named roles is friendlier there.
   *
   * 3.& vs && and | vs ||
   *    & and | work on the individual BITS of numbers and always return a number.
   *    && and || work on whole values as true/false and return one of the original values.
   *    Silent bug example: hasRead && hasWrite where someone writes 1 & 2 instead of 1 && 2.
   *    1 && 2 is 2 (truthy),but 1 & 2 is 0 (falsy) because they share no bits.A check meant to allow access
   *    quietly denies it,with no error.The reverse is worse: writing (editor && DELETE) to check a permission
   *    returns 4 (truthy) for ANY editor,so everyone looks like they can delete.
   */
}

// ============================================================
// CHALLENGE 9: Real world payroll + banking calculator
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// MDN: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
// ============================================================
{
  console.log("\n=============== CHALLENGE 9 ===============");

  // Rounds a money value to the nearest cent.Adding Number.EPSILON first fixes small values like 1.005
  // that are stored as 1.00499999...and would otherwise round the wrong way.
  // (Challenge 3 showed me this trick isn't enough for bigger amounts,which is why Scenario 3 below works in cents.)
  const roundToCents = (amount) => Math.round((amount + Number.EPSILON) * 100) / 100;

  // Formats money as "R 45,000.00".I used the "en-US" locale on purpose because it gives commas for thousands
  // and a dot for decimals,which is the format the brief asks for.("en-ZA" would use spaces and a decimal comma.)
  const formatMoney = (amount) =>
    roundToCents(amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatRands = (amount) => `R ${formatMoney(amount)}`;
  const formatDollars = (amount) => `$${formatMoney(amount)}`;

  // ---------- Scenario 1: payroll processor ----------
  console.log("\n--- Scenario 1: Payroll ---");

  const UIF_CAP = 177.12;
  const MEDICAL_AID = 2500;

  // I put the payroll in a function so I can run it once with a number and again with the form input.
  function runPayroll(grossSalary) {
    const paye = grossSalary * 0.25;
    // Math.min picks the smaller value,so UIF is 1% of gross but never more than the cap.
    const uif = Math.min(grossSalary * 0.01, UIF_CAP);
    const pension = grossSalary * 0.075;
    const totalDeductions = paye + uif + MEDICAL_AID + pension;
    const netSalary = grossSalary - totalDeductions;

    console.log(`Gross salary:      ${formatRands(grossSalary)}`);
    console.log(`PAYE (25%):        ${formatRands(paye)}`);
    console.log(`UIF (1%,capped):  ${formatRands(uif)}`);
    console.log(`Medical aid:       ${formatRands(MEDICAL_AID)}`);
    console.log(`Pension (7.5%):    ${formatRands(pension)}`);
    console.log(`Total deductions:  ${formatRands(totalDeductions)}`);
    console.log(`Net salary:        ${formatRands(netSalary)}`);
  }

  runPayroll(45000);

  // Now the same salary arriving from a form,which means it's text.
  const grossSalaryInput = "45000";
  // Number() rather than parseInt,because Number rejects junk like "45000abc" instead of quietly accepting it.
  const grossFromForm = Number(grossSalaryInput);
  // Valid only if it really is a number AND bigger than zero.Number.isNaN catches failed conversions.
  const isValidSalary = !Number.isNaN(grossFromForm) && grossFromForm > 0;

  console.log(`\nForm input "${grossSalaryInput}" converted to ${grossFromForm} (${typeof grossFromForm}),valid: ${isValidSalary}`);
  isValidSalary ? runPayroll(grossFromForm) : console.log("Invalid salary,please enter a positive number.");

  // Quick check that the validation actually rejects bad input.
  const badSalaryInput = "forty five thousand";
  const badSalary = Number(badSalaryInput);
  const badIsValid = !Number.isNaN(badSalary) && badSalary > 0;
  badIsValid ? runPayroll(badSalary) : console.log(`Rejected "${badSalaryInput}": please enter a positive number.`);

  // ---------- Scenario 2: compound interest ----------
  console.log("\n--- Scenario 2: Compound interest ---");

  const principal = 25000;
  const annualRate = 0.075;
  const compoundsPerYear = 12;
  const years = 3;

  // P * (1 + r/n)^(n*t).I used ** for the power.
  const finalBalance = principal * (1 + annualRate / compoundsPerYear) ** (compoundsPerYear * years);
  const totalInterest = finalBalance - principal;
  // Effective annual rate: what the money REALLY grew by in a year once monthly compounding is included.
  // (1 + r/n)^n - 1.It's a bit higher than 7.5% because each month earns interest on the previous months' interest.
  const effectiveAnnualRate = ((1 + annualRate / compoundsPerYear) ** compoundsPerYear - 1) * 100;

  console.log(`Deposit:               ${formatRands(principal)}`);
  console.log(`Final balance (3 yrs): ${formatRands(finalBalance)}`);
  console.log(`Total interest earned: ${formatRands(totalInterest)}`);
  console.log(`Effective annual rate: ${effectiveAnnualRate.toFixed(2)}%`);

  // ONE ternary chain for the monthly fee tiers.
  const monthlyFeeFor = (balance) => (balance < 1000 ? 25 : balance < 5000 ? 50 : balance < 25000 ? 75 : 0);

  console.log("\nFee tiers (monthly fee and what it costs over a year):");
  console.log(`Balance ${formatRands(500)}:    fee ${formatRands(monthlyFeeFor(500))} per month,${formatRands(monthlyFeeFor(500) * 12)} per year`);
  console.log(`Balance ${formatRands(1500)}:  fee ${formatRands(monthlyFeeFor(1500))} per month,${formatRands(monthlyFeeFor(1500) * 12)} per year`);
  console.log(`Balance ${formatRands(10000)}: fee ${formatRands(monthlyFeeFor(10000))} per month,${formatRands(monthlyFeeFor(10000) * 12)} per year`);
  console.log(`Balance ${formatRands(50000)}: fee ${formatRands(monthlyFeeFor(50000))} per month (waived),${formatRands(monthlyFeeFor(50000) * 12)} per year`);
  console.log(`This customer's final balance of ${formatRands(finalBalance)} lands in the waived tier: ${formatRands(monthlyFeeFor(finalBalance))} fee.`);

  // ---------- Scenario 3: multi currency transfer ----------
  console.log("\n--- Scenario 3: Transfer to the US ---");

  const sendAmount = 15750.33;
  const randsPerDollar = 18.42;
  const commissionRate = 0.025;

  // I did this one in CENTS,the way a bank would.Whole numbers of cents don't suffer from floating point errors.
  // Math.round on the input is there because 15750.33 * 100 isn't exactly 1575033 in floating point.
  const sendAmountCents = Math.round(sendAmount * 100);
  const commissionCents = Math.round(sendAmountCents * commissionRate);
  const afterCommissionCents = sendAmountCents - commissionCents;
  const dollarsReceived = afterCommissionCents / 100 / randsPerDollar;

  console.log(`Amount to send:           ${formatRands(sendAmountCents / 100)}`);
  console.log(`Commission (2.5%):        ${formatRands(commissionCents / 100)}`);
  console.log(`ZAR after commission:     ${formatRands(afterCommissionCents / 100)}`);
  console.log(`USD received (@ R18.42):  ${formatDollars(dollarsReceived)}`);

  /*
   * Final written answer: floating point in my calculations
   *
   * Where it caused a potential problem:
   * - 15750.33 * 100 is not exactly 1575033 in JavaScript,it's a tiny bit off.That's the same reason 0.1 + 0.2 gives
   *   0.30000000000000004 instead of 0.3: numbers like 0.1 and 0.33 can't be stored exactly in binary,so they're rounded,
   *   and those tiny errors show up when you multiply or add.That's why I wrapped it in Math.round.
   * - The commission itself works out to R393.75825,which isn't a real amount of money,so I had to choose
   *   where to round (to 39376 cents) instead of letting fractions of a cent carry through.
   * - In Challenge 3 the same problem bit me: my cart total came out as 470.92499999999995 and toFixed(2) rounded it
   *   DOWN to 470.92,when the real answer 470.925 should round up.Adding Number.EPSILON didn't fix it at that size,
   *   but redoing the cart in whole cents did (R470.93).
   *
   * How I handled it:
   * I rounded to whole cents at each step that represents real money,worked in cents for the transfer,
   * and only converted back to Rands with two decimals when displaying.
   *
   * How a real bank stores money:
   * Not as floats.Banks store amounts as whole integers in the smallest unit (cents),so R15 750.33 is stored as 1575033,
   * or they use a special decimal type in the database (like DECIMAL(19,4)) that does base 10 maths exactly.
   */
}

// ============================================================
// CHALLENGE 10: User interaction HTML flow
// This one lives in challenge10.html because alert,confirm and prompt only exist in the browser.
// ============================================================
console.log("\n=============== CHALLENGE 10 ===============");
console.log("See challenge10.html (open it in a browser).");

// ============================================================
// CHALLENGE 11: Bug hunt
// ============================================================
{
  console.log("\n=============== CHALLENGE 11 ===============");
  console.log("--- Original junior developer script ---");

  // === JUNIOR DEVELOPER'S CART SCRIPT (DO NOT TRUST ANY LINE) ===

  var item1Price = "199.99";
  var item2Price = "49.50";
  var item3Price = 125;
  var quantity = "2";
  var discountCode = "SAVE10";
  var isLoggedIn = "true";
  var customerAge = null;

  var subtotal = item1Price + item2Price + item3Price * quantity;
  console.log("Subtotal:", subtotal);

  var discount = discountCode == "SAVE10" ? 0.1 : 0;
  var discountAmount = subtotal * discount;
  var afterDiscount = subtotal - discountAmount;
  var vat = afterDiscount * 0.15;
  var total = afterDiscount + vat;

  var canCheckout = isLoggedIn && customerAge > 18;
  console.log("Can checkout?", canCheckout);

  var seniorDiscount = customerAge >= 60 ? total * 0.05 : null;
  var finalTotal = total - seniorDiscount;

  console.log("Total: R" + finalTotal.toFixed(2));

  // === END OF SCRIPT ===

  /*
   * BUGS I FOUND
   *
   * #1  var item1Price = "199.99";
   *     The price is stored as text,so any + with it joins strings instead of adding money.
   *
   * #2  var item2Price = "49.50";
   *     Same problem,a second price stored as a string.
   *
   * #3  var quantity = "2";
   *     Quantity is text.item3Price * quantity only works because * converts it behind the scenes,which hides the problem.
   *
   * #4  var subtotal = item1Price + item2Price + item3Price * quantity;
   *     Because the first two values are strings,+ glues them: "199.99" + "49.50" + 250 gives "199.9949.50250",not 499.49.
   *
   * #5  var subtotal = item1Price + item2Price + item3Price * quantity;
   *     Operator precedence: * runs first so quantity only multiplies item3Price.If quantity was meant for the whole order
   *     this is wrong,and if it was meant for item 3 only it should be bracketed so nobody has to guess.
   *
   * #6  var discount = discountCode == "SAVE10" ? 0.1 : 0;
   *     Loose == instead of ===.It happens to work here,but == allows type juggling.A promo code check should be exact,
   *     and ideally the code should be trimmed and uppercased first so " save10" from a form still matches.
   *
   * #7  var discountAmount = subtotal * discount;
   *     subtotal is the broken string "199.9949.50250",and * can't turn a string with two dots into a number,so this is NaN.
   *     From here every total is NaN,and the final line prints "Total: RNaN".
   *
   * #8  var isLoggedIn = "true";
   *     A boolean stored as text.Any non empty string is truthy,so "false" would ALSO count as logged in.Truthy string trap.
   *
   * #9  var canCheckout = isLoggedIn && customerAge > 18;
   *     null in a comparison silently becomes 0,so customerAge > 18 is just 0 > 18.There's no check that the age is actually known.
   *     (Watch out too: if someone tried to check it with typeof customerAge === "object",null would pass,because typeof null is "object".)
   *
   * #10 var canCheckout = isLoggedIn && customerAge > 18;
   *     Off by one: > 18 excludes someone who is exactly 18.Legal age in South Africa is 18,so it should be >= 18.
   *
   * #11 var canCheckout = isLoggedIn && customerAge > 18;
   *     && returns one of its operands,not a clean boolean.If isLoggedIn were "",canCheckout would be "" instead of false.
   *     It also does nothing: the script prints the total whether or not the customer can check out.
   *
   * #12 var seniorDiscount = customerAge >= 60 ? total * 0.05 : null;
   *     The "no discount" value should be 0,not null.It only works below because null quietly becomes 0 in arithmetic,
   *     which is relying on coercion.Missing ?? on customerAge means NaN or nonsense can flow downstream.
   */

  // ---------- CORRECTED VERSION ----------
  // Wrapped in a function so my const names don't clash with the var names above.
  function correctedCart() {
    console.log("\n--- Corrected script ---");

    // Prices stored as real numbers.
    const item1Price = 199.99;
    const item2Price = 49.5;
    const item3Price = 125;
    // The quantity still arrives as text from the form,so I convert it on purpose.
    const quantityInput = "2";
    const quantity = Number(quantityInput);

    // Named rules so they're easy to find and change.
    const DISCOUNT_RATE = 0.1;
    const VAT_RATE = 0.15;
    const SENIOR_DISCOUNT_RATE = 0.05;
    const MINIMUM_AGE = 18;
    const SENIOR_AGE = 60;

    // Promo code tidied up before an exact === comparison.
    const discountCodeInput = " save10 ";
    const discountCode = discountCodeInput.trim().toUpperCase();

    // A real boolean.If it came from somewhere as text I'd convert it with: loggedInText === "true".
    const isLoggedIn = true;
    const customerAge = null;
    // ?? gives me a clear "unknown" marker instead of letting null quietly turn into 0.
    const knownAge = customerAge ?? -1;

    // Brackets make it clear the quantity belongs to item 3 (that's what the original precedence did).
    const subtotal = item1Price + item2Price + (item3Price * quantity);
    const discountRate = discountCode === "SAVE10" ? DISCOUNT_RATE : 0;
    const discountAmount = subtotal * discountRate;
    const afterDiscount = subtotal - discountAmount;
    const vat = afterDiscount * VAT_RATE;
    const total = afterDiscount + vat;

    // Age must be known AND at least 18.Boolean() makes sure the result is a true boolean.
    const canCheckout = Boolean(isLoggedIn && knownAge >= MINIMUM_AGE);
    // No senior discount is 0,not null.
    const seniorDiscount = knownAge >= SENIOR_AGE ? total * SENIOR_DISCOUNT_RATE : 0;
    const finalTotal = total - seniorDiscount;
    const finalTotalRounded = Math.round((finalTotal + Number.EPSILON) * 100) / 100;

    console.log(`Subtotal:       R${subtotal.toFixed(2)}`);
    console.log(`Discount (${discountCode}): -R${discountAmount.toFixed(2)}`);
    console.log(`VAT (15%):      R${vat.toFixed(2)}`);
    console.log(`Senior discount: -R${seniorDiscount.toFixed(2)}`);
    console.log(`Total:          R${finalTotalRounded.toFixed(2)}`);
    console.log(
      canCheckout
        ? "Checkout: allowed"
        : `Checkout: blocked (${customerAge === null ? "age not provided" : "customer under 18"})`
    );
  }
  correctedCart();

  /*
   * What I changed,in short:
   * Prices and quantity are real numbers,so the subtotal adds up to R499.49 instead of gluing text together.
   * The promo code is cleaned up and compared with ===.isLoggedIn is a real boolean.
   * A missing age is handled on purpose with ?? and an explicit null check instead of quietly becoming 0,
   * the age check is >= 18,and the senior discount defaults to 0.Money is rounded to cents before display,
   * and the checkout result is actually reported instead of being ignored.
   */
}

// ============================================================
// CHALLENGE 12: Self reflection
// ============================================================

/*
 * 1.The most important thing I understood about JavaScript's type system
 *    JavaScript would rather hand me a wrong answer than an error.When types don't match it converts them quietly
 *    and carries on.It bit me in Challenge 3: my cart total looked fine but toFixed(2) gave R470.92 instead of R470.93,
 *    because the number was really 470.92499999999995.Nothing crashed,it was just quietly wrong by a cent,
 *    and my first fix (Number.EPSILON) didn't even work.Only switching to whole cents fixed it.
 *
 * 2.Why === is almost always safer than ==
 *    === only says two things are equal if they are the same type AND the same value,so there are no surprises.
 *    == converts types first using rules that are hard to remember.
 *    Concrete bug: a quantity field left blank gives "",and "" == 0 is true,so a check like quantity == 0
 *    treats a blank field as if the user deliberately chose zero,instead of flagging that it was never filled in.
 *
 * 3.When I'd prefer ?? over ||
 *    When 0,"" or false are real,valid answers.Example: a user's notification count.If they have 0 notifications,
 *    count || 99 replaces the 0 with 99 and shows them notifications they don't have,while count ?? 99 keeps the 0.
 *
 * 4.Why typeof null is "object",and how I check for null properly
 *    In the first version of JavaScript every value had a type tag,objects used the tag 0,and null was stored as all zeros.
 *    So typeof read the zero and said "object".It was never fixed because too many websites depended on it.
 *    To check specifically for null I use value === null.
 *
 * 5.A slow burning production bug from forgetting to cast
 *    In my day to day work with banking systems,values often come in from files and screens as text.
 *    Picture a debit order system that adds a once off R150 admin fee: amount + fee,where amount came in as "2500".
 *    The result is "2500150".If that gets saved and later converted back to a number somewhere else,a customer
 *    is debited R2 500 150 instead of R2 650.Worse,if the calculation is only run in rare cases,like a fee that
 *    applies once a year,it could sit in the code unnoticed for months.
 *
 * 6.Why 0.1 + 0.2 doesn't equal 0.3,and how real banks handle money
 *    Computers store numbers in binary,and 0.1 in binary repeats forever,like 1/3 in decimal (0.3333...).
 *    JavaScript only has 64 bits per number,so 0.1 and 0.2 are stored as very close approximations,and when you add them
 *    the small errors show up as 0.30000000000000004.Real banks don't store money as floats at all.
 *    They store whole numbers of cents (R10.50 is 1050) or use exact decimal types in the database,
 *    and only convert to Rands with two decimals when showing the amount to a person.
 *
 * 7.& and | vs && and ||
 *    The single ones are bitwise: they compare numbers bit by bit and give back a number.
 *    The double ones are logical: they treat values as true or false and give back one of the original values.
 *    Silent bug: checking a permission with (userPermissions && DELETE) instead of (userPermissions & DELETE).
 *    && returns 4 (truthy) for ANY user who has at least one permission,so suddenly every user can delete records.
 *    No error,no warning,just a security hole.
 *
 * 8.The hardest concept and what made it click
 *    Honestly,revoking a permission with & and ~ in Challenge 8.I understood | for adding a permission straight away,
 *    but user & ~WRITE looked like magic.What made it click was printing every step in binary with toString(2):
 *    seeing ~WRITE come out with every bit on EXCEPT the write bit made it obvious that & with it simply switches
 *    that one bit off and leaves the rest alone.For teaching the next cohort,I'd show the binary on screen from the start.
 */
