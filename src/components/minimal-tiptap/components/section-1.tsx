import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import type { Editor } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import { cn } from '@/lib/utils'
import { CaretDownIcon, LetterCaseCapitalizeIcon } from '@radix-ui/react-icons'
import { ToolbarButton } from './toolbar-button'
import { ShortcutKey } from './shortcut-key'
import { activeItemClass } from '../utils'

export default function SectionOne({ editor }: { editor: Editor }) {
  const toggleHeading = (level: Level) => {
    editor.chain().focus().toggleHeading({ level }).run()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ToolbarButton isActive={editor.isActive('heading')} tooltip="Text styles" className="w-12">
          <LetterCaseCapitalizeIcon className="size-5" />
          <CaretDownIcon className="size-5" />
        </ToolbarButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full">
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={cn({
            [activeItemClass]: editor.isActive('paragraph')
          })}
          aria-label="Normal text"
        >
          Normal Text
          <ShortcutKey keys={['mod', 'alt', '0']} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleHeading(1)}
          className={cn({
            [activeItemClass]: editor.isActive('heading', { level: 1 })
          })}
          aria-label="Heading 1"
        >
          <h1 className="text-3xl font-extrabold">Heading 1</h1>
          <ShortcutKey keys={['mod', 'alt', '1']} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleHeading(2)}
          className={cn({
            [activeItemClass]: editor.isActive('heading', { level: 2 })
          })}
          aria-label="Heading 2"
        >
          <h2 className="text-xl font-bold">Heading 2</h2>
          <ShortcutKey keys={['mod', 'alt', '2']} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleHeading(3)}
          className={cn({
            [activeItemClass]: editor.isActive('heading', { level: 3 })
          })}
          aria-label="Heading 3"
        >
          <h3 className="text-lg font-semibold">Heading 3</h3>
          <ShortcutKey keys={['mod', 'alt', '3']} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleHeading(4)}
          className={cn({
            [activeItemClass]: editor.isActive('heading', { level: 4 })
          })}
          aria-label="Heading 4"
        >
          <h4 className="text-base font-semibold">Heading 4</h4>
          <ShortcutKey keys={['mod', 'alt', '4']} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleHeading(5)}
          className={cn({
            [activeItemClass]: editor.isActive('heading', { level: 5 })
          })}
          aria-label="Heading 5"
        >
          <h5 className="text-sm font-normal">Heading 5</h5>
          <ShortcutKey keys={['mod', 'alt', '5']} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleHeading(6)}
          className={cn({
            [activeItemClass]: editor.isActive('heading', { level: 6 })
          })}
          aria-label="Heading 6"
        >
          <h6 className="text-sm font-normal">Heading 6</h6>
          <ShortcutKey keys={['mod', 'alt', '6']} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
