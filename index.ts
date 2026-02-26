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