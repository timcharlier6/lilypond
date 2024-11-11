
\header {
  title = "Song 6"
  composer = "Tim Charlier"
}

upper = \relative c'' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  e4 e4 e4 
  c4 c4 b4 
  e4 d4 a4 
  gis4 d4 e4 
  \break
  e4 b4 d4 
  gis4 a4 gis4 
  gis4 b4 d4 
  a4 b4 a4 
  \break

}

lower = \relative c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  c4
  e4
  c4
  e4
  \break
  e4
  d4
  a4
  g4
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
    