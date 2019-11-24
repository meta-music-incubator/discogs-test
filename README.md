Discogs / Query
===============

Tests & experiments for querying discogs and other music meta data sites.

Two projects look interesting:

*Disconnect* - nodejs api for discogs.
https://www.npmjs.com/package/disconnect


*GraphBrainz* - graphql express app/middleware for talking to musicbrainz.
Has a plugin for discogs as well.
https://www.npmjs.com/package/graphbrainz


## Disconnect

For starters, making a quick connection attempt with the *disconnect* library.

Get personal user token from here: https://www.discogs.com/settings/developers
Put token into an `.env` file, e.g.:

    DISCOGS_TOKEN=<your-token-here>


Install and run:

	npm install
	node discogs.js
