import React from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input"; // ✅ Adjust path if using Shadcn
import { Textarea } from "@/components/ui/textarea"; // ✅ Adjust path
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select"; // or from shadcn/ui if you use that

const Form = ({ formcontrols }) => {
  function renderInputsByComponentType(control) {
    let element = null;

    switch (control.componentType) {
      case "input":
        element = (
          <Input
            id={control.name}
            name={control.name}
            type={control.type || "text"}
            placeholder={control.placeholder}
          />
        );
        break;

      case "select":
        element = (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={control.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {control.options?.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea": 
        element = (
          <Textarea
            id={control.name}
            name={control.name}
            placeholder={control.placeholder}
          />
        );
        break;

      default:
        element = (
          <Input
            id={control.name}
            name={control.name}
            type={control.type || "text"}
            placeholder={control.placeholder}
          />
        );
    }

    return element;
  }

  return (
    <form>
      <div className="flex flex-col gap-3">
        {formcontrols.map((control) => (
          <div key={control.name} className="grid w-full gap-1.5">
            <Label htmlFor={control.name}>{control.label}</Label>
            {renderInputsByComponentType(control)}
          </div>
        ))}
      </div>
    </form>
  );
};

export default Form;
