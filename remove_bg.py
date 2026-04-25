import sys
try:
    from PIL import Image
    
    input_path = r"c:\Users\admin\.gemini\antigravity\brain\29d17148-3da8-45ca-851f-0e71f670ea03\media__1776964790927.png"
    output_path = r"c:\Users\admin\Downloads\code_web\ichi-spa\src\assets\logo.png"

    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    newData = []
    # Tolerance for white
    tol = 240
    for item in datas:
        # item is (R, G, B, A)
        if item[0] > tol and item[1] > tol and item[2] > tol:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Success! Saved to {output_path}")
except ImportError:
    print("Pillow not installed")
except Exception as e:
    print(f"Error: {e}")
