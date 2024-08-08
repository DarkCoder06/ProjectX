import pyautogui
import pyperclip
import time

def type_from_clipboard():
    # Get the text from the clipboard
    clipboard_text = pyperclip.paste()
    clipboard_text =  clipboard_text.replace("\r", "")
    clipboard_text =  clipboard_text.replace(r"\n\n", r"\n")
    clipboard_text =  clipboard_text.replace("  ", "")
    time.sleep(5)
    
    # # Type each character from the clipboard text
    for char in clipboard_text:
        pyautogui.typewrite(char, _pause=False)
        # time.sleep(0.01)

type_from_clipboard()
