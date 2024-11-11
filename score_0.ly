
\header {
  title = "Song 0"
  composer = "Tim Charlier"
}

upper = \relative c'' {
  \clef treble
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  a4 a b 
  gis gis gis
  a a a
  b b b \break
  c c d
  b b c
  a a b
  gis gis gis \break
}

lower = \relative c {
  \clef bass
  \key a \minor
  \time 3/4
  \tempo 4 = 44

  a'2.
  e
  a
  g \break
  g
  g
  a
  e2. \break
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
