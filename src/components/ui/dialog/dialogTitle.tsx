import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function ExampleDialog() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        {/* Se não precisar mostrar, use o VisuallyHidden */}
        <VisuallyHidden>
          <DialogTitle>Dialog Title (Oculto para acessibilidade)</DialogTitle>
        </VisuallyHidden>
        
        {/* Conteúdo do Dialog */}
        <p>Este é o conteúdo do diálogo.</p>
      </DialogContent>
    </Dialog>
  );
}

export default ExampleDialog;
