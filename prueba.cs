if (string.IsNullOrEmpty(input))
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
            // If it is, we need to keep two trailing zeros after the decimal separator.
            index += 3;
        }
        else if (index >= 0)
        {
            // If it's a non-zero digit before the decimal separator, we need to keep one trailing zero.
            index += 2;
        }

        return input.Substring(0, index + 1);
