import { Project } from "src/app/components/projects/models/project";
import { mailer } from "./mailer-details";
import { musicstore } from "./music-store-details";
import { taskManager } from "./task-manager-details";
import { pdfEditor } from "./pdf-editor";
import { todoApp } from "./todo-app";
import { importExportUtility } from "./import-export-utility";
import {chatBot } from "./chat-bot";
import { invoiceManager } from "./invoice-manager";

export const PROJECTS_DETAILS:Project[] = []

PROJECTS_DETAILS.push(taskManager)
PROJECTS_DETAILS.push(mailer)
PROJECTS_DETAILS.push(musicstore)
PROJECTS_DETAILS.push(pdfEditor)
PROJECTS_DETAILS.push(todoApp)
PROJECTS_DETAILS.push(importExportUtility)
PROJECTS_DETAILS.push(chatBot)
PROJECTS_DETAILS.push(invoiceManager)
