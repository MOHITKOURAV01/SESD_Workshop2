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