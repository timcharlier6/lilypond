import random

upper_pitches = [ 'g','a', 'b', 'd', 'e', 'g\'']
lower_pitches = ['a', 'b', 'd', 'e', 'g', 'a\'']
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
                subArr.append(n)
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
            subArr.append(n)
            string += indent + lower_pitches[n] + '2.'
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

upper = \\fixed c' {{
  \\clef treble
  \\key a \\minor
  \\time 3/4
  \\tempo 4 = 44\n
{upper_voice[0]}
}}

lower = \\fixed c {{
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

    json = f"""{{
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
