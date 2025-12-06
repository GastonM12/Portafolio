import os

p1 = '/home/gaston/.gemini/antigravity/brain/3d294edd-8276-4931-9084-10b24ea1e6b6'
p2 = 'waving_cat_1764890340840.png'
src = os.path.join(p1, p2)

dst = 'src/assets/image/waving_cat.png'

with open(src, 'rb') as f_src:
    content = f_src.read()
    with open(dst, 'wb') as f_dst:
        f_dst.write(content)

print("Done")
