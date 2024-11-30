import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";

export default function ButtonPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Button</h1>

      <section id="overview">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>Displays a button or a component that looks like a button.</p>
      </section>

      <section id="installation">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock language="bash" code={`npx shadcn@latest add button`} />
      </section>

      <section id="usage">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <CodeBlock
          language="tsx"
          code={`
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <Button variant="outline">Button</Button>
  )
}
          `}
        />
      </section>

      {/* Add more sections for Props, Examples, Accessibility, and API Reference */}
    </div>
  );
}
