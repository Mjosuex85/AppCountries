if (string.IsNullOrEmpty(input))
            return input;

        int length = input.Length;
        int index = length - 1;
        int zerosAfterComma = 0;

        // Starting from the right, find the index of the first non-zero character.
        while (index >= 0 && (input[index] == '0' || input[index] == ','))
        {
            if (input[index] == ',')
            {
                // Count the zeros after the comma.
                zerosAfterComma = 2;
            }
            else if (zerosAfterComma > 0)
            {
                // Reduce the count of zeros after the comma.
                zerosAfterComma--;
            }

            index--;
        }

        // If the last digit is a comma, remove it.
        if (index >= 0 && input[index] == ',')
        {
            index--;
        }

        // If there are any zeros after the comma, add them back.
        while (zerosAfterComma > 0)
        {
            input += "0";
            zerosAfterComma--;
        }

        return input.Substring(0, index + 1);
    }
