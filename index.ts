#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

// --- OOP CLASSES (Fulfilling the Object-Oriented Requirement) --- //

class Validator {
    static number(val: string): number {
        const n = Number(val);
        if (isNaN(n)) {
            console.error(`\x1b[31mError:\x1b[0m "${val}" is not a valid number!`);
            process.exit(1);
        }
        return n;
    }
}

class MathUtils {
    add(a: number, b: number) { return a + b; }
    sub(a: number, b: number) { return a - b; }
    mul(a: number, b: number) { return a * b; }
    div(a: number, b: number) {
        if (b === 0) throw new Error("Division by zero is not allowed.");
        return a / b;
    }
    pow(a: number, b: number) { return Math.pow(a, b); }
    sqrt(n: number) { return Math.sqrt(n); }
    fact(n: number) {
        let r = 1; for (let i = 1; i <= n; i++) r *= i;
        return r;
    }
    perc(p: number, t: number) { return (p / t) * 100; }
    isEven(n: number) { return n % 2 === 0; }
}

class TextUtils {
    upper(str: string) { return str.toUpperCase(); }
    lower(str: string) { return str.toLowerCase(); }
    rev(str: string) { return str.split("").reverse().join(""); }
    len(str: string) { return str.length; }
    countWords(str: string) { return str.trim().split(/\s+/).length; }
    isPalindrome(str: string) {
        const cln = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cln === cln.split('').reverse().join('');
    }
}

class MiscUtils {
    greet(name: string) { return `Hello ${name}, welcome to our CLI!`; }
    getFileSize(filename: string) {
        if (!fs.existsSync(filename)) throw new Error("File not found!");
        return fs.statSync(filename).size;
    }
}

class ApiService {
    async getGithubUser(username: string) {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error("User not found or API limits exceeded.");
        return await response.json();
    }
    async getQuote() {
        const res = await fetch("https://dummyjson.com/quotes/random");
        if (!res.ok) throw new Error("Could not fetch quote.");
        return await res.json();
    }
    async getWeather(city: string) {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
        if (!geoRes.ok) throw new Error("Geocoding API request failed.");
        const geoData = await geoRes.json();
        if (!geoData.results || geoData.results.length === 0) {
            throw new Error(`City "${city}" not found.`);
        }

        const { latitude, longitude, name } = geoData.results[0];
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        if (!weatherRes.ok) throw new Error("Weather API request failed.");
        const weatherData = await weatherRes.json();
        return { city: name, temp: weatherData.current_weather.temperature, wind: weatherData.current_weather.windspeed };
    }
    async getCatFact() {
        const res = await fetch("https://catfact.ninja/fact");
        if (!res.ok) throw new Error("Could not fetch cat fact.");
        return await res.json();
    }
    async getNationality(name: string) {
        const res = await fetch(`https://api.nationalize.io/?name=${name}`);
        if (!res.ok) throw new Error("API request failed.");
        return await res.json();
    }
}

// Instantiate Objects
const math = new MathUtils();
const text = new TextUtils();
const misc = new MiscUtils();
const api = new ApiService();


// --- CLI COMMANDS (Keeping the original format) --- //

program
    .name("utility-cli")
    .description("A clean 25 functional CLI with OOP, APIs and Colors")
    .version("4.0.0");

// Math Commands
program.command("add <a> <b>").description("Add two numbers").action((a: string, b: string) => {
    console.log(`\x1b[32mSum:\x1b[0m ${math.add(Validator.number(a), Validator.number(b))}`);
});

program.command("sub <a> <b>").description("Subtract two numbers").action((a: string, b: string) => {
    console.log(`\x1b[32mSubtraction result:\x1b[0m ${math.sub(Validator.number(a), Validator.number(b))}`);
});

program.command("mul <a> <b>").description("Multiply two numbers").action((a: string, b: string) => {
    console.log(`\x1b[32mMultiplication result:\x1b[0m ${math.mul(Validator.number(a), Validator.number(b))}`);
});

program.command("div <a> <b>").description("Divide two numbers").action((a: string, b: string) => {
    try {
        console.log(`\x1b[32mDivision result:\x1b[0m ${math.div(Validator.number(a), Validator.number(b))}`);
    } catch (e: any) {
        console.log(`\x1b[31mError:\x1b[0m ${e.message}`);
    }
});

program.command("mod <a> <b>").description("Find the remainder of division").action((a: string, b: string) => {
    console.log(`\x1b[32mRemainder:\x1b[0m ${Validator.number(a) % Validator.number(b)}`);
});

program.command("pow <a> <b>").description("Calculate 'a' raised to the power of 'b'").action((a: string, b: string) => {
    console.log(`\x1b[32mPower:\x1b[0m ${math.pow(Validator.number(a), Validator.number(b))}`);
});

program.command("sqrt <n>").description("Calculate square root").action((n: string) => {
    console.log(`\x1b[32mSquare root:\x1b[0m ${math.sqrt(Validator.number(n))}`);
});

program.command("fact <n>").description("Calculate factorial").action((n: string) => {
    console.log(`\x1b[32mFactorial:\x1b[0m ${math.fact(Validator.number(n))}`);
});

program.command("perc <p> <t>").description("Calculate percentage p of t").action((p: string, t: string) => {
    console.log(`\x1b[32mPercentage:\x1b[0m ${math.perc(Validator.number(p), Validator.number(t)).toFixed(2)}%`);
});

program.command("is-even <n>").description("Check if numeric value is even").action((n: string) => {
    console.log(`\x1b[32m${n} is:\x1b[0m ${math.isEven(Validator.number(n)) ? "Even" : "Odd"}`);
});

// Misc / System Commands
program.command("rand <n>").description("Generate a random number up to max n").action((n: string) => {
    console.log(`\x1b[36mRandom number:\x1b[0m ${Math.floor(Math.random() * Validator.number(n))}`);
});

program.command("area-circle <r>").description("Calculate area of a circle given radius r").action((r: string) => {
    console.log(`\x1b[36mArea of circle:\x1b[0m ${(Math.PI * Math.pow(Validator.number(r), 2)).toFixed(2)}`);
});

program.command("now").description("Display current time").action(() => {
    console.log(`\x1b[36mCurrent Time:\x1b[0m ${new Date().toLocaleTimeString()}`);
});

program.command("today").description("Display today's date").action(() => {
    console.log(`\x1b[36mToday's Date:\x1b[0m ${new Date().toLocaleDateString()}`);
});

program.command("greet <name>").description("Greet a user").action((name: string) => {
    console.log(`\x1b[32m${misc.greet(name)}\x1b[0m`);
});

program.command("fileinfo <filename>").description("Display file size and presence").action((filename: string) => {
    try {
        console.log(`\x1b[36mFile Size of ${filename}:\x1b[0m ${misc.getFileSize(filename)} bytes`);
    } catch (e: any) {
        console.error(`\x1b[31mError:\x1b[0m ${e.message}`);
    }
});

// Text / String Commands
program.command("rev <str>").description("Reverse a string").action((s: string) => {
    console.log(`\x1b[35mReversed:\x1b[0m ${text.rev(s)}`);
});

program.command("upper <str>").description("Convert string to uppercase").action((s: string) => {
    console.log(`\x1b[35mUppercase:\x1b[0m ${text.upper(s)}`);
});

program.command("lower <str>").description("Convert string to lowercase").action((s: string) => {
    console.log(`\x1b[35mLowercase:\x1b[0m ${text.lower(s)}`);
});

program.command("len <str>").description("Get length of a string").action((s: string) => {
    console.log(`\x1b[35mCharacter count:\x1b[0m ${text.len(s)}`);
});

program.command("count-words <str>").description("Count words in a string").action((s: string) => {
    console.log(`\x1b[35mWord Count:\x1b[0m ${text.countWords(s)}`);
});

program.command("palindrome <str>").description("Check if string is a palindrome").action((s: string) => {
    const isPal = text.isPalindrome(s);
    console.log(`\x1b[35mIs Palindrome?\x1b[0m ${isPal ? "Yes" : "No"}`);
});

// API Integration Commands (3 APIs)
program.command("github <username>")
    .description("Fetch public GitHub user info")
    .option("-r, --repos", "Show public repos count as well")
    .action(async (username: string, options: any) => {
        try {
            console.log(`\x1b[33mFetching GitHub data for "${username}"...\x1b[0m`);
            const data = await api.getGithubUser(username);

            console.log(`\x1b[32mName:\x1b[0m ${data.name || 'N/A'}`);
            console.log(`\x1b[32mFollowers:\x1b[0m ${data.followers}`);
            if (options.repos) {
                console.log(`\x1b[32mPublic Repositories:\x1b[0m ${data.public_repos}`);
            }
        } catch (error: any) {
            console.error(`\x1b[31mError:\x1b[0m ${error.message}`);