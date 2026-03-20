import { Post, Controller, Body } from "@nestjs/common";
import { EmailService } from "src/email/email.service";

@Controller('contact')
export class ContactController {
    constructor(private readonly emailService: EmailService) {}

    @Post()
    async sendContact(@Body() body:any) {
        const { name, email, message } = body;
        return await this.emailService.sendContactEmail(name, email, message);
    }
}