import time

# Define parameters
bpm = 44
beat_duration = 60 / bpm  # Duration of one beat in seconds

# Score definition
two_voices_score = [
    {
        "bars_1to8": [
            [[0], [0, 0, 1]],  # bar 1
            [[-3], [-0.5, -0.5, -0.5]],  # bar 2
            [[0], [0, 0, 0]],  # bar 3
            [[-1], [1, 1, 1]],  # bar 4
            [[-1], [2, 2, 3]],  # bar 5
            [[-1, 0.5], [1, 1, 2]],  # bar 6
            [[0, -2], [0, 0, 1]],  # bar 7
            [[-3], [-0.5, -0.5, -0.5]]  # bar 8
        ],
        "bars_9to16": [
            [[-5], [0, 0, 1]],  # bar 9
            [[-4], [-0.5, -0.5, -0.5]],  # bar 10
            [[-3], [0, 0, 0]],  # bar 11
            [[-1], [1, 1, 1]],  # bar 12
            [[-1], [2, 2, 3]],  # bar 13
            [[-2], [1, 1, 2]],  # bar 14
            [[-3], [0, 0, 1]],  # bar 15
            [[-3], [-0.5, -0.5, -0.5]]  # bar 16
        ]
    }
]

# Function to play score in real time
def play_score(score, beat_duration):
    for section in score:
        for bars_key, bars in section.items():
            for bar in bars:
                lower_voice, upper_voice = bar  # Separate left and right hand notes
                
                # Determine the maximum number of notes in either hand for the bar
                max_notes = max(len(upper_voice), len(lower_voice))
                
                # Play each note in sync
                for i in range(max_notes):
                    # Fetch left and right hand notes if available, otherwise use a placeholder
                    high_note = upper_voice[i] if i < len(upper_voice) else ''
                    low_note = lower_voice[i] if i < len(lower_voice) else '  '
                    
                    # Print the current notes for both hands simultaneously
                    print(f"Bass: {low_note} | Melody: {high_note}")
                    
                    # Wait for the beat duration
                    time.sleep(beat_duration)

# Run the score playback function
play_score(two_voices_score, beat_duration)
