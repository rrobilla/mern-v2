const express = require('express');
const router = express.Router();



//@route  GET api/v1/game/playlist
//@desc   Get All examples
//@access Public
router.get('/', (req, res) =>{
    var playlistData = {
        "profile_id": 1,
        "playlist": {
            "game_slots": {
                "slot_1": {
                    "default_game": "scramble",
                    "category": "math",
                    "level": 1
                },
                "slot_2": {
                    "default_game": "flashcard",
                    "category": "spelling",
                    "level": 2
                },
                "slot_3": {
                    "default_game": "matching",
                    "category": "math",
                    "level": 3
                },
                "slot_4": {
                    "default_game": "memory",
                    "category": "spelling",
                    "level": 1
                },
                "slot_5": {
                    "default_game": "count",
                    "category": "math",
                    "level": 2
                }
            },
            "reward_slot": {
                "default_reward:": "youtube",
                "default_timelimit": 5
            },
            "configured_state": false,
            "available_games": [
                "scramble",
                "flashcard",
                "matching",
                "memory",
                "count"
            ],
            "available_rewards": [
                "youtube",
                "minecraft",
                "netflix"
            ]
        }
    };
    res.json(playlistData);
    console.log('Sent requested playlist data');
  });
  
  //@route POST api/v1/examples
  //@desc Add item to examples
  //@access public
  //router.post('/', (req, res) =>{
  //  list.push(req.body.fname);
  //  console.log('Added an item to the list');
  //  console.log(list);
  //  res.json({itemAdded: true})
  //});










module.exports = router;