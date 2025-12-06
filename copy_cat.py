import shutil
import os

src = '/home/gaston/.gemini/antigravity/brain/3d294edd-8276-4931-9084-10b24ea1e6b6/waving_cat_1764890340840.png'
dst = 'src/assets/image/waving_cat.png'

try:
    shutil.copy(src, dst)
    print(f"Successfully copied {src} to {dst}")
except Exception as e:
    print(f"Error copying file: {e}")
