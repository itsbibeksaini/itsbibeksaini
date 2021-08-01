import { Mockup } from "src/app/components/gallery/models/mockup";
import { FILENAMES } from "./filenames";

export const MOCKUPS:Mockup[] = []

let index = 0;
for(let mockupFile of FILENAMES.keys()){
    let mockup: Mockup = new Mockup()
    mockup.ID = "THUMB_" + index
    mockup.IMG_THUMB = "assets/gallery/thumbnails/" + mockupFile

    let linkedImages = FILENAMES.get(mockupFile)

    if(linkedImages !== undefined){
        for(let linkedImg of linkedImages){
            mockup.LINKED_IMG.push("assets/gallery/preview/" + linkedImg)
        }
    }
        
    MOCKUPS.push(mockup)
    index++
}
