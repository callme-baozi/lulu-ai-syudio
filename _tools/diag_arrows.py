# -*- coding: utf-8 -*-
"""Diagnose depth-carousel arrow CSS - find all stylesheets and any overrides."""
import os
import re

ROOT = r"D:\data\user_01\lulu-ai-studio"

# 1. links in index.html
content = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
print("=== stylesheet links in index.html ===")
for m in re.finditer(r'<link[^>]+href="([^"]+)"[^>]*>', content):
    print("LINK:", m.group(1))

# 2. any css containing depth-carousel
print("\n=== CSS files containing depth-carousel ===")
for root, dirs, files in os.walk(ROOT):
    dirs[:] = [d for d in dirs if d not in ("lulu-ai-studio-static-excel", "vendor", "_tools", "node_modules")]
    for fn in files:
        if not fn.endswith(".css"):
            continue
        p = os.path.join(root, fn)
        c = open(p, encoding="utf-8", errors="replace").read()
        if "depth-carousel" in c:
            rel = os.path.relpath(p, ROOT)
            print("FILE:", rel)
            # show the arrow rules in this file
            for i, line in enumerate(c.splitlines(), 1):
                if "depth-carousel__arrow" in line:
                    print("   L%d: %s" % (i, line.strip()))
