import { Admin, Core } from 'flyteidl';

/** These enums are only aliased and exported from this file. They should
 * be imported directly from here to avoid runtime errors when TS processes
 * modules individually (such as when running with ts-jest)
 */

/* It's an ENUM exports, and as such need to be exported as both type and const value */
/* eslint-disable @typescript-eslint/no-redeclare */
export type ExecutionState = Admin.ExecutionState;
export const ExecutionState = Admin.ExecutionState;
export type ExecutionMode = Admin.ExecutionMetadata.ExecutionMode;
export const ExecutionMode = Admin.ExecutionMetadata.ExecutionMode;
export type WorkflowExecutionPhase = Core.WorkflowExecution.Phase;
export const WorkflowExecutionPhase = Core.WorkflowExecution.Phase;
export type NodeExecutionPhase = Core.NodeExecution.Phase;
export const NodeExecutionPhase = Core.NodeExecution.Phase;
export type TaskExecutionPhase = Core.TaskExecution.Phase;
export const TaskExecutionPhase = Core.TaskExecution.Phase;
export type CatalogCacheStatus = Core.CatalogCacheStatus;
export const CatalogCacheStatus = Core.CatalogCacheStatus;
/* eslint-enable @typescript-eslint/no-redeclare */
