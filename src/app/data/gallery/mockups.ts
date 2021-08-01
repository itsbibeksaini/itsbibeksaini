import { Mockup } from "src/app/components/gallery/models/mockup";
import { FILENAMES } from "./filenames";

export const MOCKUPS:Mockup[] = []

for(let i = 0; i<FILENAMES.length; i++){
    let mockup: Mockup = new Mockup()
    mockup.IMG_THUMB = "assets/gallery/" + FILENAMES[i]
    MOCKUPS.push(mockup)
}

