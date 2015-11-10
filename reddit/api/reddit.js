/**
 * Created by youngmoon on 11/10/15.
 */

import fetch from 'isomorphic-fetch'
import {} from '../actions';

export function fetchReddit (reddit, callback) {
    fetch(`http://www.reddit.com/r/${reddit}.json`)
        .then(req => req.json())
        .then(json => {
            const postsByReddit = {}

            postsByReddit[reddit] = {
                didInvalidate: false,
                isFetching: false,
                items: json.data.children.map(child => child.data),
                lastUpdated: Date.now()
            }

            callback({
                selectedReddit: reddit,
                postsByReddit
            })
        })
}