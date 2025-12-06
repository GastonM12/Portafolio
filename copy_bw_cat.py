import os

p1 = '/home/gaston/.gemini/antigravity/brain/3d294edd-8276-4931-9084-10b24ea1e6b6'
p2 = 'bw_cat_3d_1764890736240.png'
src = os.path.join(p1, p2)

dst = 'src/assets/image/bw_cat.png'

try:
    with open(src, 'rb') as f_src:
        content = f_src.read()
        with open(dst, 'wb') as f_dst:
            f_dst.write(content)
    print("Done")
except Exception as e:
    print(f"Error: {e}")
