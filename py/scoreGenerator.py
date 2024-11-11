import random
import os

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

    ly_directory = "../ly"
    json_directory = "../json"

    os.makedirs(ly_directory, exist_ok=True)
    os.makedirs(json_directory, exist_ok=True)

    ly_filename = f"score_{i}.ly"
    ly_file_path = os.path.join(ly_directory, ly_filename)
    with open(ly_file_path, 'w') as file:
        file.write(f"{ly_file_path}")

    json_filename = f"score_{i}.json"
    json_file_path = os.path.join(json_directory, json_filename)
    with open(json_file_path, 'w') as file:
        file.write(f"{json_file_path}")
