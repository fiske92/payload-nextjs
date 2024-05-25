import { blocks } from "@/blocks/blockList";

export const RenderBlocks = ({ layout }) => {
  return (
    <div>
      {layout.map((block, i) => {
        const Block = blocks[block.blockType];

        return Block ? <Block {...block} key={i} /> : null;
      })}
    </div>
  )
}