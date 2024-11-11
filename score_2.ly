
\header {
  title = "Song 2"
  composer = "Tim Charlier"
}

upper = \relative c'' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  a4 b4 gis4 
  d4 e4 d4 
  d4 a4 c4 
  gis4 a4 gis4 
  \break
  e4 e4 a4 
  d4 c4 d4 
  a4 d4 e4 
  e4 c4 gis4 
  \break

}

lower = \relative c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  a4
  f4
  a4
  a4
  \break
  c4
  d4
  c4
  f4
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
    