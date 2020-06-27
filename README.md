# A portfolio website "for my mom"

###### (me trying to remember how node.js and react.js work)

Travis, ma boy:
![Travis (.com) branch](https://img.shields.io/travis/com/anyakeller/moms_website/master?label=master) ![Travis (.com) branch](https://img.shields.io/travis/com/anyakeller/moms_website/random?label=sandbox)

Made with node.js and react.js and a lot of other stuff (it's all in package.json and client/package.json under dependencies)
Thanks to the people who made these packages!

##### If you want to fork and run this locally for whatever weird reason...

Idk sure go ahead but don't get mad at me if it doesn't work or my code causes you great stress

# Table of Conents

<!-- TOC -->

- [Site code stuff](#site-code-stuff)
  - [It <span style="font-size: 1.2em; color:#689F63; text-shadow: -1px -1px #333333">NODE</span>](#it-span-stylefont-size-12em-color689f63-text-shadow--1px--1px-333333nodespan)
    - [The singular node server route](#the-singular-node-server-route)
    - [Node Server dependencies](#node-server-dependencies)
  - [It <span style="font-size: 1.2em; color:#61DBFB; text-shadow: -1px -1px 3px #20232B;">REAC</span>](#it-span-stylefont-size-12em-color61dbfb-text-shadow--1px--1px-3px-20232breacspan)
    - [React router DOM routes](#react-router-dom-routes)
    - [React app dependencies](#react-app-dependencies)
  - [But most importantly, it <span style="font-size: 1.2em; color:#689F63; text-shadow: -1px -1px #333333">FULL</span> <span style="font-size: 1.2em; color:#61DBFB; text-shadow: -1px -1px 3px #20232B;">STAC</span>](#but-most-importantly-it-span-stylefont-size-12em-color689f63-text-shadow--1px--1px-333333fullspan-span-stylefont-size-12em-color61dbfb-text-shadow--1px--1px-3px-20232bstacspan)
- [Ad-diend[um]s (pronounced like "friends")](#ad-diendums-pronounced-like-friends)
  - [The One Where I Forget What My Code Does](#the-one-where-i-forget-what-my-code-does)
    - [What did I do here again?](#what-did-i-do-here-again)
    - [Packages I frequently forget the purpose of or how to use them:](#packages-i-frequently-forget-the-purpose-of-or-how-to-use-them)
  - [The One Where I Don't Know What TODO:](#the-one-where-i-dont-know-what-todo)
  - [The One Where I Google the Same **MINOR** Thing Over and Over Because I Have the Attention Span of a Squirrel](#the-one-where-i-google-the-same-minor-thing-over-and-over-because-i-have-the-attention-span-of-a-squirrel)

<!-- /TOC -->

# The stuff you don't actually want to read

## Site code stuff
### It <span style="font-size: 1.2em; color:#689F63; text-shadow: -1px -1px #333333">NODE</span>

The entry point for this app is server.js. It runs on port 3001 when the app is run locally. It has one useless, pointless, failure, college-dropout, freeloader, ungrateful slug of a route that contributes nothing to this ~~household~~ react app.

#### The singular node server route

- /api/testing
  - GET: "did you get this?"

\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~<span style="font-size:1.1em;">*fin*</span>\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

##### [roll credits]

#### Node Server dependencies

From root package.json

```json
{
  "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "if-env": "^1.0.4",
    "path": "^0.12.7",
    "webpack": "4.42.0"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "concurrently": "^5.2.0",
    "mocha": "^8.0.1",
    "nodemon": "^2.0.4"
  }
}
```

### It <span style="font-size: 1.2em; color:#61DBFB; text-shadow: -1px -1px 3px #20232B;">REAC</span>

#### React router DOM routes

- /
- /gallery

#### React app dependencies

From /client/package.json

##### I DON'T KNOW WHY HALF OF THIS STUFF IS THERE
```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "autoprefixer": "^9.8.1",
    "bootstrap": "^4.5.0",
    "jquery": "^3.5.1",
    "node-sass": "^4.14.1",
    "popper.js": "^1.16.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-responsive": "^8.1.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^3.4.1"
  },
  "devDependencies": {
    "postcss-loader": "^3.0.0",
    "sass-loader": "^8.0.2",
    "webpack": "4.42.0"
  }
}
```

### But most importantly, it <span style="font-size: 1.2em; color:#689F63; text-shadow: -1px -1px #333333">FULL</span> <span style="font-size: 1.2em; color:#61DBFB; text-shadow: -1px -1px 3px #20232B;">STAC</span>

You may be asking yourself, or me, or the universe, "why is this a full stack application?"
And I reply, "I didn't realize react apps could run on their own without a node server until I had set up the server with mocha+chai tests and a single useless route. Now I'm too scared to remove it. I'm not very bright–so sue me."

## Ad-diend[um]s (pronounced like "friends")
###### Just addendums, but rewritten in such a way that if you sqint your brain and say it in your head, it kind of sounds like "Friends" (the tv show).  Note: If you say it out loud it doesn't work.

ROSS AND RACHEL ROSS AND RACHEL ROSS AND RACHEL

### The One Where I Forget What My Code Does

#### What did I do here again?

WRITE STUFF ANYA PLS

#### Packages I frequently forget the purpose of or how to use them:

| What the Thingy?               | Why the Thyingy?                                   | How the Thingy?                  |
|:-------------------------------|:---------------------------------------------------|:---------------------------------|
| mocha and chai (and chai-http) | so I don't have to run each test manually          | use Google, Anya                 |
| dotenv                         | makes using .env easier --I don't really know      | I think you know this one        |
| if-env                         | something about knowing whether to run dev or prod | Just don't touch it, it's fine   |
| concurrently                   | another setup thing sorta                          | no touchy the fishy              |
| express                        | routes and servers and stuff                       | uhhh use Google and old projects |

### The One Where I Don't Know What TODO:

- finish README
- figure out what to do
- something about not using the master branch for big stuff
- Oh yeah I remember, I'm building a website

### The One Where I Google the Same **MINOR** Thing Over and Over Because I Have the Attention Span of a Squirrel

To skip a build use [skip travis] in commit message
example:
`git commit -m "[skip travis] Update README"`
I use zsh so:
`gcam "[skip travis] Update READMEMES"`

To kill all node process
`$killall node`
