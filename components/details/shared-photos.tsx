import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '../ui/button'

const SharedPhotos = () => {
  const ImageTile = () => {
    return (
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-2 py-7"
      >
        <img className="size-10 rounded object-cover" src="image.jpg" />
        <p className="font-bold">image.jpg</p>
      </Button>
    )
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Shared photos</AccordionTrigger>
        <AccordionContent className="flex h-72 flex-col gap-0 overflow-y-auto">
          <ImageTile />
          <ImageTile />
          <ImageTile />
          <ImageTile />
          <ImageTile />
          <ImageTile />
          <ImageTile />
          <ImageTile />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default SharedPhotos
