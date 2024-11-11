
\header {
  title = "Song 5"
  composer = "Tim Charlier"
}

upper = \relative c'' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  d4 a4 c4 
  b4 e4 e4 
  c4 gis4 b4 
  d4 gis4 d4 
  \break
  c4 d4 gis4 
  b4 c4 gis4 
  gis4 d4 d4 
  d4 a4 c4 
  \break

}

lower = \relative c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  d4
  c4
  g4
  e4
  \break
  g4
  g4
  a4
  a4
  \break

}

\score {
  \new PianoStaff \with { instrumentName = "Piano" }
  <<
    \new Staff = "upper" \upper
    \new Staff = "lower" \lower
  >>
  \layout { }
  \midi { }
}
    