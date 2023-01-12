import {collection} from "firebase/firestore";
import {firestore} from "./firebase";
import {eventConverter} from "./types/event";

export const db = {
  events: collection(firestore, "events").withConverter(eventConverter)
}