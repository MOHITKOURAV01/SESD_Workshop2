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