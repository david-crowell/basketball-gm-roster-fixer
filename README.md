basketball gm roster fixer
==========================

A lot of the basketball-gm rosters I came across had a problem: multiple ratings for the same player. This would cause progression to be ignored for all years for which an additional rating set was provided. (At least that was my diagnosis).

So I made this tool to fix roster files by removing all but the first year's ratings.

warning
=======

This will change your file in place. It's always a good idea to back up rosters and saves.

how to
======

1. Install node.js via [package manager](https://nodejs.org/en/download/package-manager/) or [directly](https://nodejs.org/en/download/)
2. Download my code or use git: `git clone git@github.com:david-crowell/basketball-gm-roster-fixer.git`
3. Command line: `node fix_roster <filename>` where `<filename>` is your roster .json file
