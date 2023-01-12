import {onSnapshot, QueryDocumentSnapshot} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {db} from "../firestore";
import {TpEvent} from "../types/event";

export default function Events() {
  const [events, setEvents] = useState<QueryDocumentSnapshot<TpEvent>[]>([])

  useEffect(() => {
    onSnapshot(db.events, (data) => setEvents(data.docs))
  }, [])

  // TODO
  return (
      <div>
        <p>Arrangementer</p>
        <ul>
          {events.map((event) => <li>{event.data().name}</li>)}
        </ul>
      </div>
  );
};