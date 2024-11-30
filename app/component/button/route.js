export async function GET() {
  return new Response(
    JSON.stringify({
      name: "button-demo",
      type: "registry:ui",
      dependencies: [],
      files: [
        {
          path: "/raptorui/button-demo.tsx",
          content:
            "\"use client\";\n\nimport { useState } from \"react\";\nimport { Button } from \"@/components/ui/button\";\n\nexport interface ButtonDemoProps {\n  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';\n  size?: 'default' | 'sm' | 'lg' | 'icon';\n  initialText?: string;\n  onClick?: () => void;\n}\n\nexport default function ButtonDemo({\n  variant = 'default',\n  size = 'default',\n  initialText = 'RaptorUI Button',\n  onClick\n}: ButtonDemoProps) {\n  const [clickCount, setClickCount] = useState(0);\n\n  const handleClick = () => {\n    setClickCount(prev => prev + 1);\n    onClick?.();\n  };\n\n  return (\n    <div className=\"flex flex-col items-center gap-4\">\n      <Button\n        variant={variant}\n        size={size}\n        onClick={handleClick}\n        className=\"relative overflow-hidden group\"\n      >\n        <span className=\"relative z-10\">{initialText}</span>\n        <div\n          className=\"absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 \n                     group-hover:opacity-20 transition-opacity duration-300\"\n        />\n      </Button>\n      {clickCount > 0 && (\n        <p className=\"text-sm text-muted-foreground\">\n          Button clicked {clickCount} times\n        </p>\n      )}\n    </div>\n  );\n}\n",
          type: "registry:ui",
          target: "",
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
