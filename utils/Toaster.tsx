import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const Toaster = (
  title: string,
  description: string,
  status: "error" | "success" | "warning"
) => {
  toast({
    title,
    description,
    status,
    duration: 3000,
    isClosable: true,
  });
};
