import React from 'react';
import './StudioNoteGrid.scss';
import * as Tone from 'tone';
import Note from 'types/Note';
import StudioNoteColumn from './StudioNoteColumn';

interface StudioNoteColumnProps {
  notes: Note[];
  updateNote?: (name: string, timing: number) => void;
  pianoInstance: Tone.Sampler | null;
}
const Row = 150;

const StudioNoteGrid = ({
  notes,
  updateNote,
  pianoInstance,
}: StudioNoteColumnProps) => {
  return (
    <div className="studio__note-grid">
      {Array.from({ length: Row }, (_, rowIndex) => {
        const columnNote = notes.find((note) => {
          return note.timing === rowIndex * 0.25;
        });
        return (
          <StudioNoteColumn
            columnNote={columnNote}
            updateNote={updateNote}
            key={rowIndex}
            timing={rowIndex * 0.25}
            pianoInstance={pianoInstance}
          />
        );
      })}
    </div>
  );
};

export default StudioNoteGrid;
