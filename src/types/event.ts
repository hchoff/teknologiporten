import firebase from "firebase/compat";
import {FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";

export type TpEvent = {
  name: string;
}

export const eventConverter: FirestoreDataConverter<TpEvent> = {
  toFirestore(event: TpEvent): firebase.firestore.DocumentData {
    return {
      "name": event.name
    }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): TpEvent {
    return {
      name: snapshot.data().name
    }
  }
}