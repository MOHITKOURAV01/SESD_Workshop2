<div align="center">

# MyCLI - Advanced Node.js & TypeScript Utility Tool

*A powerful, clean, and fully Object-Oriented Command Line Interface (CLI) combining daily OS chores with 25+ features and interactive 3rd-party APIs.*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green.svg)](https://nodejs.org/)
[![Commander.js](https://img.shields.io/badge/Commander.js-14.0.3-orange.svg)](https://github.com/tj/commander.js/)

</div>

---

## About The Project

**MyCLI** was built as part of SESD Workshop 2, aiming to showcase the integration of modern TypeScript methodologies with **Object-Oriented Programming (OOP) concepts** into the foundation of CLI tools. 

Instead of a scattered procedural script, this CLI segregates business logic into highly modular, decoupled Class instances such as `MathUtils`, `TextUtils`, `ApiService`, and `MiscUtils`, creating a robust environment scalable to hundreds of commands. 

---

## Core Features & Enhancements

- **Object-Oriented Backbone:** Pure OOP structure emphasizing Encapsulation, separating logic execution heavily from route configurations.
- **Gorgeous CLI Output:** Custom ANSI colored outputs leveraging specific highlights for Success (Green), Warning (Yellow), Error (Red) and Info (Cyan) statuses. 
- **Validation Layer:** Intelligent error-handling with global input checking preventing users from submitting NaN strings when a command expects strict digits. 
- **Deep API Integrations:** Not just simple requests; we parse JSON payload arrays synchronously, returning readable data right to your shell via 5 custom APIs.
- **25 Comprehensive Commands:** Dozens of functionalities categorized into simple strings and syntax mappings with helpful descriptions attached to each route.

---

## Installation & Setup

Want to run this locally? It is easier than ever. Follow the instructions below to spin up your very own copy of MyCLI:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MOHITKOURAV01/SESD_Workshop2.git
   cd SESD_Workshop2
   ```

2. **Install missing Node packages:**
   ```bash
   npm install
   ```

3. **Build the TypeScript to JavaScript (ES2016 target):**
   ```bash
   npx tsc
   ```

4. **Link internationally for global Shell usage** *(Recommended)*:
   ```bash
   npm link
   ```
   *Now you can open any terminal window in your machine, type `mycli`, and achieve blazing fast execution without running `./dist/index.js` manually!*

---

## Complete Command Reference

Explore all 25 uniquely constructed commands. Simply append any of these commands mapping to the `mycli` root command.

### Mathematical Utilities (9)
| Command | Arguments | Description |
|---|---|---|
| `add` | `<a> <b>` | Adds two integers together |
| `sub` | `<a> <b>` | Subtracts integer `a` by `b` |
| `mul` | `<a> <b>` | Multiplies integer `a` by `b` |
| `div` | `<a> <b>` | Divides integer `a` by `b` (safely checks for 0 divisor) |
| `mod` | `<a> <b>` | Evaluates the modulo remainder of division |
| `pow` | `<a> <b>` | Mathematically raises `a` to the power of exponent `b` |
| `sqrt` | `<n>` | Evaluates the square root of number `n` |
| `fact` | `<n>` | Generates the factorial of `n` (using algorithmic loop execution) |
| `perc` | `<p> <t>` | Resolves the exact percentage evaluation evaluating `p` out of total `t` |
| `is-even` | `<n>` | Performs boolean checking validating if `n` is an Even or Odd construct |

### String / Text Manipulations (6)
| Command | Arguments | Description |
|---|---|---|
| `upper` | `<str>` | Formats your input text exactly to strictly UPPERCASE format |
| `lower` | `<str>` | Formats your input text into entirely lowercase structure |
| `rev` | `<str>` | Creates a cloned flipped representation of the string sent backward |
| `len` | `<str>` | Displays raw character string length metrics |
| `count-words`| `<str>` | Strips raw outer-regex spacing formats returning absolute nested word count metrics |
| `palindrome`| `<str>` | Runs a custom regex pattern against text predicting if its reversible identical symmetry |

### Cloud API Integrations (5)
| Command | Arguments/Options | Integration Provider | Description |
|---|---|---|---|
| `weather` | `<city>` | *Open-Meteo* | Provides realtime localized geographical temperature analysis °C metrics |
| `github` | `<username> [-r]` | *GitHub Graph API* | Live fetching logic bringing Follower/Repository accounts straight to bash terminal. |
| `quote` | None | *DummyJSON* | Emits high-quality famous philosophical quote generations coupled by author identity parsing. |
| `guess-nation` | `<name>` | *Nationalize API* | Calculates percentage likelihood demographic structures associating ethnic identities based off custom firstnames directly globally via metadata tracking. |
| `cat-fact` | None | *Ninja API* | Gathers interesting zoological and biological facts specifically referencing historical cats globally! |

### System Misc Core (5)
| Command | Description |
|---|---|
| `now` | Outputs Time metrics |
| `date` | Emits generalized Localizing OS Date parameters |
| `rand <n> [-m]` | Pseudo-Randomizing Integer generation mapped utilizing local internal OS Math logic algorithms |
| `fileinfo <filename>`| Reads native File System `fs` bytes returning absolute file storage metric footprint sizes |
| `greet <name>` | Welcoming format generator string format |

---

## Example Usage Visualized

Here is an overview of interactive usage commands being generated across environments running properly:

```bash
# General OS & Math checking
$ mycli rand 100 --min 50
[INFO] Random number: 76

# Manipulating string arguments seamlessly with built in features
$ mycli palindrome "racecar"
[INFO] Is Palindrome? Yes

# Reaching towards External APIs across HTTP Protocols fetching JSON format dynamically
$ mycli github torvalds --repos
[INFO] Fetching GitHub data for "torvalds"...
[SUCCESS] Name: Linus Torvalds
[SUCCESS] Followers: 219500
[SUCCESS] Public Repositories: 7

$ mycli weather Delhi
[INFO] Fetching current weather for Delhi...
[SUCCESS] Weather in Delhi:
[INFO] Temperature: 28.5°C
[INFO] Wind Speed: 9.8 km/h
```

---

<div align="center">
<i>Crafted deeply using TypeScript + Node.js</i>
</div>