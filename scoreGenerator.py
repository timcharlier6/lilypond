import random
import pdb

upper_pitches = [ 'gis','a', 'b', 'c', 'd', 'e']
upper_notes = [-1, 0, 1, 2, 3, 4]
lower_pitches = ['a', 'g', 'f', 'e', 'd', 'c']
lower_notes = [0, -1, -2, -3, -4, -5]
indent = '  '  

def generate_upper_voice():
    string = ''
    numbers = []
    for i in range(2):
        for j in range(4):
            subArr = []
            string += indent
            for k in range(3):
                n = random.randint(0, 5)
                subArr.append(upper_notes[n])
                string += upper_pitches[n] + '4 '
            string += '\n'
            numbers.append(subArr)
        string += indent + '\\break\n'

    return [string, numbers]

def generate_lower_voice():
    string = ''
    numbers = []
    for i in range(2):
        for j in range(4):
            subArr = []
            n = random.randint(0, 5)
            subArr.append(lower_notes[n])
            string += indent + lower_pitches[n] + '4'
            string += '\n'
            numbers.append(subArr)
        string += indent + '\\break\n'

    return [string, numbers]

for i in range(1,10):

    upper_voice = generate_upper_voice()
    lower_voice = generate_lower_voice()
    title = f"Song {i}" 

    content = f"""
\\header {{
  title = "{title}"
  composer = "Tim Charlier"
}}

upper = \\relative c'' {{
  \\clef treble
  \\key a \\minor
  \\time 3/4
  \\tempo 4 = 44\n
{upper_voice[0]}
}}

lower = \\relative c {{
  \\clef bass
  \\key a \\minor
  \\time 3/4
  \\tempo 4 = 44\n
{lower_voice[0]}
}}

\\score {{
  \\new PianoStaff \\with {{ instrumentName = "Piano" }}
  <<
    \\new Staff = "upper" \\upper
    \\new Staff = "lower" \\lower
  >>
  \\layout {{ }}
  \\midi {{ }}
}}
    """

    json = f"""
{{
    "upper" : {upper_voice[1]},
    "lower": {lower_voice[1]}
}}
"""

    filename = f"score_{i}.ly"
    with open(filename, 'w') as file:
        file.write(content)

    filename = f"score_{i}.json"
    with open(filename, 'w') as file:
        file.write(json)
