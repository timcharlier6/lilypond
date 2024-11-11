
\header {
  title = "Song 9"
  composer = "Tim Charlier"
}

upper = \relative c'' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  e4 d4 a4 
  c4 gis4 c4 
  gis4 a4 c4 
  d4 c4 b4 
  \break
  c4 c4 c4 
  d4 b4 c4 
  a4 gis4 a4 
  gis4 d4 c4 
  \break

}

lower = \relative c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  e4
  e4
  g4
  g4
  \break
  f4
  f4
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
    