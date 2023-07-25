f (string.IsNullOrEmpty(input))
            return input;

        int length = input.Length;
        int index = length - 1;

        // Starting from the right, find the index of the first non-zero character.
        while (index >= 0 && input[index] == '0')
        {
            index--;
        }

        // If we found a non-zero character, check if it's a decimal separator.
        if (index >= 0 && input[index] == ',')
        {
            // If it is, we need to keep one trailing zero after the decimal separator.
            index++;
        }

        return input.Substring(0, index + 1);
